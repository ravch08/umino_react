import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Link } from "react-router-dom";
import { bannerItems } from "../utils/data";

const Banner = () => {
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
					{bannerItems?.map((item) => {
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
										<img src={item.imgSrc} alt={item.title} style={{ borderRadius: "1.2rem" }} />
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
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Banner;
