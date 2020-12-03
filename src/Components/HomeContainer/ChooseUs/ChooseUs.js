import React from 'react'
import BlogCard from './BlogCard/BlogCard'

const chooseData = [
	{
		title: 'Fast Delivery',
		description:
			'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
		img:
			'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Image/adult-blur-blurred-background-687824.png',
		id: '2001',
		icon: 'https://i.ibb.co/m6TDjxS/g1.png',
	},
	{
		title: 'A Good Auto Responder',
		description:
			'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
		img:
			'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Image/chef-cook-food-33614.png',
		id: '2002',
		icon: 'https://i.ibb.co/Lh9MFpK/g3.png',
	},
	{
		title: 'Home Delivery',
		description:
			'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
		img:
			'https://github.com/ProgrammingHero1/hot-onion-restaurent-resources/blob/master/Image/architecture-building-city-2047397.png?raw=true',
		icon: 'https://i.ibb.co/C2DG0ZV/g2.png',
		id: '2003',
	},
]

const ChooseUs = () => {
	return (
		<section className='why-choose-us py-5'>
			<div className='container'>
				<div className='section-title  pb-4'>
					<h2>Why you choose us</h2>
					<p className='pr-5'>
						Barton waited twenty always repair in within we do. An delighted
						<br/>
						offering crusty mu is dagwood's at. Boy prosperous increasing
						surround{' '}
					</p>
				</div>
				<div className='row'>
					{chooseData.map((item) => (
						<BlogCard key={item.id} item={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default ChooseUs
