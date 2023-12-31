import { Stack } from "@mui/material";

import { ourCompany } from "../utils/helper";

const AboutCompany = () => {
	return (
		<section className="our-company">
			<div className="container">
				<Stack
					gap={"2rem"}
					alignItems={"center"}
					justifyContent={"space-between"}
					direction={{ xs: "column", lg: "row" }}
				>
					<div className="company-content">
						<span className="super-heading">OUR MISSION</span>
						<h2>Story About Us</h2>
						<p>
							We have crafted thousands of manufacturing processes, strategy that allows us to
							understand our customers like never before. We are present up to this point due to the
							trust and appreciation of our customers.
							<br /> <br />
							To help stem the flow of plastic into the ocean, we have committed to eliminating
							single-use plastic from th product range and food outlets by 2023.
							<br /> <br />
							We spend months finding the best factories around the world—the same ones that produce
							your favorite designer labels. We visit them often and build strong personal
							relationships with the owners.
						</p>
					</div>
					<figure>
						<img src={ourCompany} loading="lazy" alt="Story About Us" />
					</figure>
				</Stack>
			</div>
		</section>
	);
};

export default AboutCompany;
