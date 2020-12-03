import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// function BlogCard(props) {
// 	const { title, description, img, icon } = props.item
// 	const [descriptionCollapse, setDescriptionCollapse] = useState(false)
// 	const showMore = () => {
// 		console.log('Show More')
// 		setDescriptionCollapse(true)
// 	}
// 	const showLess = () => {
// 		console.log('Show less')
// 		setDescriptionCollapse(false)
// 	}
// 	return (
// 		<div className='col-lg-4 col-md-6 mb-3 w-50'>
// 			<div className='card'>
// 				<img className='card-img-top' src={img} alt='' />
// 				<div className='card-body'>
// 					<div className='d-flex'>
// 						<img className='mr-2 icon-choose' src={icon} alt='' />
// 						<div>
// 							<h5> {title} </h5>
// 							<p>
// 								{descriptionCollapse ? description : description.substr(0, 100)}
// 							</p>
// 							{descriptionCollapse ? (
// 								<span onClick={showLess} className='card-link collapse-btn'>
// 									See Less <ArrowForwardIcon className='icon' />
// 								</span>
// 							) : (
// 								<span onClick={showMore} className='card-link collapse-btn'>
// 									See More <ArrowBackIcon className='icon' />
// 								</span>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
// export default BlogCard
// import React from 'react';
import React, { useState } from 'react';
import './BlogCard.css';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function BlogCard(props) {
  const classes = useStyles();

  const { title, description, img, icon } = props.item
	const [descriptionCollapse, setDescriptionCollapse] = useState(false)

	const showMore = () => {
		console.log('Show More')
		setDescriptionCollapse(true)
	}
	const showLess = () => {
		console.log('Show less')
		setDescriptionCollapse(false)
	}

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
		  <img className='icon-choose' src={icon} alt='' />
		  	<h5> {title} </h5>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
				<p>
					{descriptionCollapse ? description : description.substr(0, 100)}
				</p>
				{descriptionCollapse ? (
					<span onClick={showLess} className='card-link collapse-btn'>
						See Less <ArrowForwardIcon className='icon' />
					</span>
				) : (
					<span onClick={showMore} className='card-link collapse-btn'>
						See More <ArrowBackIcon className='icon' />
					</span>
				)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
