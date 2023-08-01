import { Stack } from '@mui/material';
import React from 'react';
import { whyChooseItems } from '../utils/data';

const WhyChoose = () => {

	return (
		<section className="whyChoose" >
			<div className="container">

				<div className="section-heading">
					<span className="superHeading">WHY CHOOSE US</span>
					<h2>Our Unique Things</h2>
					<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel pretium lectus qua. Nunc id cursus metus ididunt ut labore metus episcing.</p>
				</div>

				<Stack className="unique-items" gap={'3rem'} direction={{ xs: 'column', md: 'row' }}>
					{whyChooseItems?.map(item => {
						return (
							<div className="unique-item" key={item.id}>
								<figure><img src={item.imgSrc} loading='lazy' alt={item.title} /></figure>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						)
					})}
				</Stack>

			</div>
		</section>
	)
}

export default WhyChoose;