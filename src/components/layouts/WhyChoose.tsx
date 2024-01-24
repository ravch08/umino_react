import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";
import { getWhyChoose } from "../utils/api";

export const whyChooseSchema = z.object({
	id: number().optional(),
	imgSrc: string(),
	title: string(),
	description: string(),
});

export type WhyChooseProps = z.infer<typeof whyChooseSchema>;

const WhyChoose = () => {
	const { data, status } = useQuery({
		queryKey: ["whyChoose"],
		queryFn: getWhyChoose,
	});

	return (
		<section className="whyChoose">
			<div className="container">
				<div className="section-heading">
					<span className="superHeading">WHY CHOOSE US</span>
					<h2>Our Unique Things</h2>
					<p>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel
						pretium lectus qua. Nunc id cursus metus ididunt ut labore metus episcing.
					</p>
				</div>

				<Stack className="unique-items" gap={"3rem"} direction={{ xs: "column", md: "row" }}>
					{status === "success"
						? data?.map((item: WhyChooseProps) => {
								return (
									<div className="unique-item" key={item.id}>
										<figure>
											<img src={item.imgSrc} loading="lazy" alt={item.title} />
										</figure>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
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

export default WhyChoose;
