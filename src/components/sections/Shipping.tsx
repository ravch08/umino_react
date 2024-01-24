import { Stack } from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";
import { getShippingItems } from "../utils/api";

export const shippingItemSchema = z.object({
	id: number().optional(),
	imgSrc: string().url(),
	title: string().min(5, { message: "Atleast 5 characters is required!" }),
	description: string(),
});

export type ShippingItemsProps = z.infer<typeof shippingItemSchema>;

const Shipping = () => {
	const { data, status } = useQuery({
		queryKey: ["shippingItems"],
		queryFn: getShippingItems,
	});

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
					{status === "loading" ? <h2>Loading...</h2> : null}
					{status === "success"
						? data?.map((item: ShippingItemsProps) => (
								<div className="shipping-item" key={item.id}>
									<img src={item.imgSrc} loading="lazy" alt={item.title} />
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))
						: null}
				</Stack>
			</div>
		</section>
	);
};

export default Shipping;
