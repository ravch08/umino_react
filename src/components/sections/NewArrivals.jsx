import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import { Stack } from '@mui/material';
import { ProductCard } from '../utils/helper';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist, removeFromWishlist } from '../../app/wishCartSlice';

const NewArrivals = () => {

	const categoryAll = [];
	const dispatch = useDispatch();

	const [active, setActive] = useState(false);
	const allProductItems = useSelector(state => state.wishCartState.items);

	const [isCategory, setIsCategory] = useState('All');

	const getCategory = (e) => {
		const tabCategory = e.target.dataset.category;
		setIsCategory(tabCategory);
		setActive(!active);
	}

	const categoryArray = allProductItems.map(item => item.category);
	categoryArray.map(innerArray => {
		innerArray.map(item => categoryAll.push(item));
	})

	const filteredCategories = ['All', ...new Set(categoryAll)]
	const categoryFilteredItems = allProductItems.filter(item => item.category.includes(isCategory));

	return (
		<section className="newArrivals">
			<div className="container">

				<div className="section-heading">
					<h2>New Arrivals</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, velit dolorem harum cupiditate unde cum dolore deleniti? Quis, quas!</p>
				</div>

				<Stack
					mb={'4rem'}
					alignItems={'center'}
					className="product-tabs"
					justifyContent={'center'}
					direction={'row'} gap={'1rem'}
				>

					{filteredCategories?.map((item) => {
						return (
							<button
								key={uuidv4()}
								data-category={item}
								onClick={getCategory}
								className={isCategory === item ? 'active tab-item' : 'tab-item'}
							> {item} </button>
						)
					})}
				</Stack>

				<Stack
					alignItems={'center'}
					justifyContent={"center"}
					className='product-wrapper'
					gap={"2rem"} flexWrap={'wrap'}
					direction={{ xs: 'column', md: 'row' }}
				>
					{(isCategory === "All" ? allProductItems : categoryFilteredItems)?.map(item => {
						return (<ProductCard
							key={item.id}
							stars={item.stars}
							price={item.price}
							title={item.title}
							imgSrc1={item.imgSrc1}
							imgSrc11={item.imgSrc11}
							priceCrossed={item.priceCrossed}
							addToCartHandler={() => dispatch(addToCart(item))}
							addToWislistHandler={() => dispatch(addToWishlist(item))}
							removeFromWishlistHandler={() => dispatch(removeFromWishlist(item))}
						/>)
					})}
				</Stack>
			</div>
		</section>
	)
}

export default NewArrivals;