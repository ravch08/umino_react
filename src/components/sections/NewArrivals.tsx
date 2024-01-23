import { Stack } from "@mui/material";
import { ProductCard } from "../utils/helper";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { number, string, z } from "zod";
import { addToCart, addToWishlist, removeFromWishlist } from "../../app/wishCartSlice";
import { getProducts } from "../utils/api";

const productSchema = z.object({
	id: number().optional(),
	stars: number()
		.min(1, { message: "Minimal value cannot be less than 1" })
		.max(5, { message: "Maximum value cannot be more than 5" }),
	price: number(),
	cartQuantity: number(),
	priceCrossed: number().or(string()),
	imgSrc1: string().url(),
	imgSrc11: string().url(),
	title: string(),
	category: string().array(),
});

export type ProductProps = z.infer<typeof productSchema>;

const NewArrivals = () => {
	const [active, setActive] = useState(false);
	const [isCategory, setIsCategory] = useState<string>("All");

	const dispatch = useDispatch();
	const categoryAll: string[] = [];

	const { data } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});

	const getCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e);
		const target = e.target as HTMLButtonElement;
		const tabCategory = target.dataset.category!;
		setIsCategory(tabCategory);
		setActive(!active);
	};

	data
		?.map((item: ProductProps) => item.category)
		?.map((innerArray: string[]) => {
			innerArray.forEach((item) => categoryAll.push(item));
		});

	const filteredCategories = ["All", ...new Set(categoryAll)];
	const filteredProducts = data?.filter((item: ProductProps) =>
		item.category!.includes(isCategory)
	);

	return (
		<section className="newArrivals">
			<div className="container">
				<div className="section-heading">
					<h2>New Arrivals</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, velit
						dolorem harum cupiditate unde cum dolore deleniti? Quis, quas!
					</p>
				</div>

				<Stack
					mb={"4rem"}
					gap={"1rem"}
					direction={"row"}
					alignItems={"center"}
					className="product-tabs"
					justifyContent={"center"}
				>
					{filteredCategories?.map((item) => (
						<button
							key={uuid()}
							data-category={item}
							onClick={getCategory}
							className={isCategory === item ? "active tab-item" : "tab-item"}
						>
							{item}
						</button>
					))}
				</Stack>

				<Stack
					gap={"2rem"}
					flexWrap={"wrap"}
					alignItems={"center"}
					justifyContent={"center"}
					className="product-wrapper"
					direction={{ xs: "column", md: "row" }}
				>
					{(isCategory === "All" ? data : filteredProducts)?.map((item: ProductProps) => {
						return (
							<ProductCard
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
							/>
						);
					})}
				</Stack>
			</div>
		</section>
	);
};

export default NewArrivals;
