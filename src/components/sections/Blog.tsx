import { Card, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { number, string, z } from "zod";
import { getBlogs } from "../utils/api";

export const blogsScheme = z.object({
	id: number().optional(),
	date: string(),
	author: string(),
	category: string(),
	title: string(),
	imgSrc: string().url(),
	description: string(),
});

export type BlogItemsProps = z.infer<typeof blogsScheme>;

const Blog = () => {
	const { data, status } = useQuery({
		queryKey: ["blogs"],
		queryFn: getBlogs,
	});

	return (
		<section className="blog">
			<div className="container">
				<Stack
					flexWrap={"wrap"}
					alignItems={"center"}
					gap={{ xs: "5rem", md: "2rem" }}
					justifyContent={"space-between"}
					direction={{ xs: "column", md: "row" }}
				>
					{status === "loading" ? <h2>Loading...</h2> : null}
					{status === "success"
						? data?.map((item: BlogItemsProps) => {
								return (
									<Card
										key={item.id}
										className="blog-item"
										sx={{
											boxShadow: "none",
											borderRadius: "0",
											width: { xs: "100%", md: "45%", lg: "30%" },
										}}
									>
										<figure>
											<img src={item.imgSrc} loading="lazy" alt={item.title} />
										</figure>

										<div className="blog-content">
											<span>{item.category}</span>
											<Link to="#!">
												<Typography variant="h4" component={"h3"}>
													{item.title}
												</Typography>
											</Link>
											<p>{item.description}</p>
										</div>

										<Stack gap={"2rem"} direction={"row"} className="blog-footer">
											<span>{item.date}</span>
											<span>POST BY: {item.author}</span>
										</Stack>
									</Card>
								);
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  })
						: null}
				</Stack>
			</div>
		</section>
	);
};

export default Blog;
