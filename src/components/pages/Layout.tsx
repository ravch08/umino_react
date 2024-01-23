import { Outlet } from "react-router-dom";
import { Footer, Header } from "../utils/helper";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
