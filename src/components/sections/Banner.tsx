import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { number, string, z } from "zod";

import { getBanners } from "../utils/api";

export const bannerSchema = z.object({
	id: number().optional(),
	imgSrc: string(),
	imgSrc768: string(),
	imgSrc1024: string(),
	imgSrc1200: string(),
	title: string().min(5, { message: "Atleast 5 characters is required!" }),
	superHeading: string().min(5, { message: "Atleast 5 characters is required!" }),
	subHeading: string().min(5, { message: "Atleast 5 characters is required!" }),
});

export type BannerItemsProps = z.infer<typeof bannerSchema>;

const Banner = () => {
	const { data, status } = useQuery({
		queryKey: ["banners"],
		queryFn: getBanners,
	});

	return (
		<section className="banner">
			<div className="container-fluid">
				<Swiper
					loop={true}
					speed={1000}
					effect={"fade"}
					spaceBetween={30}
					grabCursor={true}
					navigation={true}
					centeredSlides={true}
					modules={[Navigation, EffectFade]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					breakpoints={{
						768: {
							slidesPerView: 1,
						},
					}}
				>
					{status === "loading" ? <h2>Loading...</h2> : null}
					{status === "success"
						? data?.map((item: BannerItemsProps) => {
								return (
									<SwiperSlide key={item.id}>
										<div className="banner-item">
											<picture>
												<source
													media="(min-width: 1025px) and (max-width: 1200px)"
													srcSet={item.imgSrc1200}
												/>
												<source
													media="(min-width: 768px) and (max-width: 1024px)"
													srcSet={item.imgSrc1024}
												/>
												<source media="(max-width: 767px)" srcSet={item.imgSrc768} />
												<img
													src={item.imgSrc}
													alt={item.title}
													style={{ borderRadius: "1.2rem" }}
												/>
											</picture>

											<div className="banner-content" style={{ width: "50%" }}>
												<span className="superheading">{item.superHeading}</span>
												<h1>{item.title}</h1>
												<p>{item.subHeading}</p>
												<Link to="contact" className="btn btn-light">
													EXPLORE NOW
												</Link>
											</div>
										</div>
									</SwiperSlide>
								);
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  })
						: null}
				</Swiper>
			</div>
		</section>
	);
};

export default Banner;
