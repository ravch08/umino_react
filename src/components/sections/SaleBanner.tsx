import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { salesItems } from "../utils/data";

const SaleBanner = () => {
	return (
		<section className="sales-banner">
			<div className="container-fluid">
				<Stack
					gap={"2rem"}
					alignItems={"center"}
					justifyContent={"space-between"}
					direction={{ xs: "column", lg: "row" }}
				>
					{salesItems?.map((item) => {
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
					})}
				</Stack>
			</div>
		</section>
	);
};

export default SaleBanner;
