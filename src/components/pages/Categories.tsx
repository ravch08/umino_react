import { PageBanner, YouMightLike, bannerCart } from "../utils/helper";

const Categories = () => {
	return (
		<main>
			<PageBanner
				title="Categories"
				imgSrc={bannerCart}
				superHeading="WELCOME TO UMINO"
				description="Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect."
			/>
			<YouMightLike />
		</main>
	);
};

export default Categories;
