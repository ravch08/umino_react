import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { PageBanner, bannerCart } from "../utils/helper";

const Cart = () => {

	const dispatch = useDispatch();
	const { carts, totalPrice, totalCartQuantity } = useSelector(state => state.wishCartState);

	return (
		<main>
			<PageBanner
				title='Cart'
				imgSrc={bannerCart}
				superHeading='WELCOME TO UMINO'
				description="Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect."
			/>


			<section className="cart-page" aria-labelledby='Cart Page'>
				<div className='container'>
					<Stack direction={'row'} spacing={'2rem'} justifyContent={'space-between'}>

						<Box className="cart-totals">
							<div className="cart-header">Cart Totals</div>
							<Stack direction={'row'} justifyContent={'space-between'} className="subtotal">
								<span>Subtotal:</span>
								<span>${totalPrice}</span>
							</Stack>
							<Stack direction={'row'} justifyContent={'space-between'} className="subtotal">
								<span>Quantity:</span>
								<span>{totalCartQuantity}</span>
							</Stack>
							<Stack direction={'row'} justifyContent={'space-between'} className="shipping">
								<span>Shipping</span>
								<span>Free Shipping</span>
							</Stack>

							<Stack direction={'row'} justifyContent={'space-between'} className="totals">
								<span>Total</span>
								<span className='total-price'>${totalPrice}</span>
							</Stack>

							<Link to="#!" className='btn btn-cart'>Checkout</Link>
						</Box>
					</Stack>
				</div>
			</section>
		</main>
	)
}

export default Cart;