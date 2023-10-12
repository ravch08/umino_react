import { Stack } from "@mui/material";

import { shippingItems } from "../utils/data";

const Shipping = () => {
	return (
		<section className="shipping">
			<div className="container">
				<Stack
					gap={"4rem"}
					alignItems={"center"}
					className="shipping-wrapper"
					justifyContent={"space-between"}
					direction={{ xs: "column", md: "row" }}
				>
					{shippingItems?.map((item) => {
						return (
							<div className="shipping-item" key={item.id}>
								<img src={item.imgSrc} loading="lazy" alt={item.title} />
								<h2>{item.title}</h2>
								<p>{item.description}</p>
							</div>
						);
					})}
				</Stack>
			</div>
		</section>
	);
};

export default Shipping;
