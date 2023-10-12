import { Banner, Blog, NewArrivals, SaleBanner, Shipping, YouMightLike } from "../utils/helper";

const Home = () => {
	return (
		<main>
			<Banner />
			<YouMightLike />
			<NewArrivals />
			<SaleBanner />
			<Shipping />
			<Blog />
		</main>
	);
};

export default Home;
