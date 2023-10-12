import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { PageBanner, ProductCard, bannerWishlist } from "../utils/helper";

import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../app/wishCartSlice";

const Wishlist = () => {
	const dispatch = useDispatch();
	const { wishCarts } = useSelector((state) => state.wishCartState);

	return (
		<main>
			<PageBanner
				title="Wishlist"
				imgSrc={bannerWishlist}
				superHeading="WELCOME TO UMINO"
				description="Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect."
			/>

			<section className="wishlist" aria-labelledby="Wishlist">
				<div className="container">
					<Stack
						mb={"4rem"}
						gap={"1rem"}
						direction={"row"}
						flexWrap={"wrap"}
						alignItems={"center"}
						justifyContent={"center"}
						className="wishlist-wrapper"
					>
						{wishCarts.length === 0 ? (
							<p>
								No products were added to the wishlist page.{" "}
								<Link to="/" className="btn-text">
									Back to shopping
								</Link>
							</p>
						) : (
							wishCarts?.map((item) => {
								return (
									<ProductCard
										key={item.id}
										stars={item.stars}
										price={item.price}
										title={item.title}
										imgSrc1={item.imgSrc1}
										imgSrc11={item.imgSrc11}
										priceCrossed={item.priceCrossed}
										removeFromWishlistHandler={() => dispatch(removeFromWishlist(item))}
									/>
								);
							})
						)}
					</Stack>
				</div>
			</section>
		</main>
	);
};

export default Wishlist;
