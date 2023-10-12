import React from "react";
import { useParams } from "react-router-dom";
import { categoryItems } from "../utils/data";
import { bannerCategory, PageBanner } from "../utils/helper";

const CategoryDetail = () => {
	const { categoryID } = useParams();

	return (
		<main>
			{categoryItems?.map((cat) => {
				return cat.id === categoryID ? (
					<React.Fragment key={cat.id}>
						<PageBanner
							title={cat.title}
							imgSrc={bannerCategory}
							superHeading="WELCOME TO UMINO"
							description="Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect."
						/>
						<section className="single-category">
							<div className="container">
								<h2>Single Category Page</h2>
							</div>
						</section>
					</React.Fragment>
				) : null;
			})}
		</main>
	);
};

export default CategoryDetail;
