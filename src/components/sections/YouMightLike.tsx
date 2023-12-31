import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { categoryItems } from "../utils/data";

const YouMightLike = () => {
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
					{categoryItems?.map((item) => {
						return (
							<div className="category-item" key={item.id}>
								<figure>
									<img src={item.imgSrc} loading="lazy" alt={item.title} />
								</figure>
								<Link to={`/categories/${item.id}`} className="title">
									{item.title}
								</Link>
							</div>
						);
					})}
				</Stack>
			</div>
		</section>
	);
};

export default YouMightLike;
