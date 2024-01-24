import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { number, string, z } from "zod";
import { getSalesItems } from "../utils/api";

export const salesItemSchema = z.object({
	id: number().optional(),
	link: string(),
	imgSrc: string().url(),
	title: string().min(5, { message: "Atleast 5 characters is required!" }),
	superHeading: string().min(5, { message: "Atleast 5 characters is required!" }),
	description: string(),
});

export type SalesItemProps = z.infer<typeof salesItemSchema>;

const SaleBanner = () => {
	const { data, status } = useQuery({
		queryKey: ["salesItems"],
		queryFn: getSalesItems,
	});

	return (
		<section className="sales-banner">
			<div className="container-fluid">
				<Stack
					gap={"2rem"}
					alignItems={"center"}
					justifyContent={"space-between"}
					direction={{ xs: "column", lg: "row" }}
				>
					{status === "loading" ? <h2>Loading...</h2> : null}
					{status === "success"
						? data?.map((item: SalesItemProps) => {
								return (
									<div className="sales-item" key={item.id}>
										<figure>
											<img src={item.imgSrc} loading="lazy" alt={item.title} />
										</figure>
										<div className="banner-content">
											<span>{item.superHeading}</span>
											<h2>{item.title}</h2>
											<p>{item.description}</p>
											<Link to={item.link} className="btn btn-dark">
												SHOP NOW
											</Link>
										</div>
									</div>
								);
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  })
						: null}
				</Stack>
			</div>
		</section>
	);
};

export default SaleBanner;
