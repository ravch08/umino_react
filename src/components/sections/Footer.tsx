import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { ScrollTop, SocialIcons, logoLight } from "../utils/helper";

const footerFormSchema = z.object({
	email: z
		.string()
		.email({ message: "Invalid email format" })
		.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
});

type FooterFormSchemaProps = z.infer<typeof footerFormSchema>;

const Footer = () => {
	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FooterFormSchemaProps>({ resolver: zodResolver(footerFormSchema) });

	const submitHandler = (data: FooterFormSchemaProps) => {
		console.log(data);
		reset();
	};

	return (
		<footer>
			<div className="container">
				<Stack
					flexWrap={"wrap"}
					alignItems={"flex-start"}
					gap={{ xs: "5rem", md: "0" }}
					justifyContent={"space-between"}
					direction={{ xs: "column", md: "row" }}
				>
					<div className="footer-item">
						<Link to="/">
							<img src={logoLight} loading="lazy" width="120px" alt="umino" />
						</Link>
						<span className="address">
							268 St, South New York/NY 98944, <br /> United States.
						</span>
						<a href="tel:+222-1800-2628">+222-1800-2628</a>
						<a href="mailto:blueskytechcompany@gmail.com">blueskytechcompany@gmail.com</a>
						<SocialIcons />
					</div>

					<div className="footer-list">
						<span>HOT CATEGORIES</span>
						<ul className="ftr-list">
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Special Offer
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Performance
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									T-Shirts
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Underwear
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Top Brands
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Online Exclusion
								</Link>
							</li>
						</ul>
					</div>

					<div className="footer-list">
						<span>CUSTOMER SERVICE</span>
						<ul className="ftr-list">
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Privacy Policy
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Refund Policy
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Shipping & Return
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Terms & Condition
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Advanced Search
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Theme FAQs
								</Link>
							</li>
							<li className="ftr-item">
								<Link to="#!" className="ftr-link">
									Store Location
								</Link>
							</li>
						</ul>
					</div>

					<div className="footer-list">
						<span>SIGN UP TO NEWSLETTER</span>
						<p>
							Enter your email address to get $10 off your first order and free shipping.Updates
							information on Sales and Offers.
						</p>

						<form onSubmit={handleSubmit(submitHandler)}>
							<label htmlFor="email">Email Address</label>
							<input type="email" placeholder="Enter your Email.." {...register("email")} />

							<button type="submit" className="btn btn-light">
								SUBSCRIBE
							</button>
						</form>
						<p className="form-error">{errors.email?.message}</p>
						<DevTool control={control} />
					</div>
				</Stack>
			</div>
			<ScrollTop />
		</footer>
	);
};

export default Footer;
