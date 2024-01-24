import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { number, string, z } from "zod";

import { getCategories } from "../utils/api";

export const categoriesSchema = z.object({
	id: number().optional(),
	title: string().min(4, { message: "Atleast 4 characters are required!" }),
	imgSrc: string().url(),
});

export type categoriesProps = z.infer<typeof categoriesSchema>;

const YouMightLike = () => {
	const { data, status } = useQuery({
		queryKey: ["categories"],
		queryFn: getCategories,
	});

	return (
		<section className="you-might-like">
			<div className="container">
				<div className="section-heading">
					<h2>You Might Like</h2>
					<p>Our products are designed for everyone, environmentally friendly.</p>
				</div>

				<Stack
					gap={"2rem"}
					alignItems={"center"}
					justifyContent={"space-between"}
					direction={{ xs: "column", sm: "row" }}
					flexWrap={{ xs: "wrap", lg: "initial" }}
				>
					{status === "loading" ? <h2>Loading...</h2> : null}
					{status === "success"
						? data?.map((item: categoriesProps) => (
								<div className="category-item" key={item.id}>
									<figure>
										<img src={item.imgSrc} loading="lazy" alt={item.title} />
									</figure>
									<Link to={`/categories/${item.id}`} className="title">
										{item.title}
									</Link>
								</div>
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))
						: null}
				</Stack>
			</div>
		</section>
	);
};

export default YouMightLike;
