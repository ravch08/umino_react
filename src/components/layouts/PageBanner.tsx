import { PageBannerProps } from "../../types/types";

const PageBanner = (props: PageBannerProps) => {
	return (
		<section className="page-banner">
			<div className="banner-item">
				<img src={props.imgSrc} loading="lazy" alt={props.title} />
				<div className="banner-content" key={props.id}>
					<span className="superheading">{props.superHeading}</span>
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</div>
			</div>
		</section>
	);
};

export default PageBanner;
