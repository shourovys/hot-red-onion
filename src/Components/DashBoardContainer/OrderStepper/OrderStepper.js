import Button from '@material-ui/core/Button'
import Step from '@material-ui/core/Step'
import StepConnector from '@material-ui/core/StepConnector'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp'
import Check from '@material-ui/icons/Check'
import DoneAllSharpIcon from '@material-ui/icons/DoneAllSharp'
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp'
import LocalPizzaSharpIcon from '@material-ui/icons/LocalPizzaSharp'
import LocalShippingSharpIcon from '@material-ui/icons/LocalShippingSharp'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { updateOrderStatus } from '../../../api'
import {
	ColorlibConnectorStyle,
	colorlibStepIconStyles,
	useQontoStepIconStyles,
} from './OrderStepperStyle'

function QontoStepIcon(props) {
	const classes = useQontoStepIconStyles()
	const { active, completed } = props

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
			})}
		>
			{completed ? (
				<Check className={classes.completed} />
			) : (
				<div className={classes.circle} />
			)}
		</div>
	)
}

QontoStepIcon.propTypes = {
	active: PropTypes.bool,
	completed: PropTypes.bool,
}

const ColorlibConnector = withStyles(ColorlibConnectorStyle)(StepConnector)

const useColorlibStepIconStyles = makeStyles(colorlibStepIconStyles)

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles()
	const { active, completed } = props

	const icons = {
		1: <AssignmentTurnedInSharpIcon />,
		2: <DoneAllSharpIcon />,
		3: <LocalPizzaSharpIcon />,
		4: <LocalShippingSharpIcon />,
		5: <EmojiEmotionsSharpIcon />,
	}

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{icons[String(props.icon)]}
		</div>
	)
}

ColorlibStepIcon.propTypes = {
	active: PropTypes.bool,
	completed: PropTypes.bool,
	icon: PropTypes.node,
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}))

function getSteps() {
	return [
		'Order Placed',
		'Order Confirmation',
		'Preparation',
		'Out for Delivery',
		'Complete',
	]
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return 'Confirm this order'
		case 1:
			return 'Order foods are preparing'
		case 2:
			return 'Order out for delivery'
		case 3:
			return 'Order Complete'
		default:
			return 'Unknown step'
	}
}

export default function OrderStepper({ controller, order, showId }) {
	const classes = useStyles()
	const [activeStep, setActiveStep] = React.useState(0)
	const steps = getSteps()

	const updateActiveStep = async (activeSteps) => {
		const { data } = await updateOrderStatus(order._id, activeSteps)
		setActiveStep(data.orderActiveStep)
		console.log(
			'🚀 ~ file: OrderStepper.js ~ line 118 ~ updateActiveStep ~ data',
			data
		)
	}

	const handleNext = () => {
		updateActiveStep(activeStep + 1)

		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		updateActiveStep(activeStep - 1)

		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
		updateActiveStep(0)
	}

	useEffect(() => {
		setActiveStep(order.orderActiveStep)
	}, [order.orderActiveStep])

	return (
		<div className={classes.root}>
			{showId && <h2>{order._id}</h2>}
			<Stepper
				alternativeLabel
				activeStep={activeStep}
				connector={<ColorlibConnector />}
			>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			{controller && (
				<div>
					{activeStep === steps.length ? (
						<div>
							<Typography className={classes.instructions}>
								All steps completed - you&apos;re finished
							</Typography>
							<Button onClick={handleReset} className={classes.button}>
								Reset
							</Button>
						</div>
					) : (
						<div>
							<Typography className={classes.instructions}>
								{getStepContent(activeStep)}
							</Typography>
							<div>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={classes.button}
								>
									Back
								</Button>
								<Button
									variant='contained'
									color='primary'
									onClick={handleNext}
									className={classes.button}
								>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	)
}
