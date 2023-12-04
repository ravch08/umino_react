import { Stack, Typography } from "@mui/material";

import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import { bannerLogin, PageBanner } from "../utils/helper";

const loginSchema = z.object({
	loginEmail: z
		.string()
		.email({ message: "Invalid Email Format!" })
		.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),

	loginPassword: z
		.string()
		.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, {
			message:
				"Password must contain eight characters, at least one letter, one number, and one special character",
		}),
});

type LoginSchemaProps = z.infer<typeof loginSchema>;

const Login = () => {
	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<LoginSchemaProps>({
		resolver: zodResolver(loginSchema),
	});

	const loginHandler = (data: LoginSchemaProps) => {
		console.log("User Logged in!", data);
		reset();
	};

	return (
		<main>
			<PageBanner imgSrc={bannerLogin} title="Login" superHeading="WELCOME TO UMINO" />

			<section className="login-form" aria-labelledby="Login Form">
				<div className="container">
					<Stack
						gap={"4rem"}
						direction={{ xs: "column", lg: "row" }}
						justifyContent={"space-between"}
					>
						<div className="form">
							<Typography variant="h3" component={"h2"} mb={"2rem"}>
								{" "}
								Login
							</Typography>

							<form onSubmit={handleSubmit(loginHandler)}>
								<Stack direction={"row"} gap={"2rem"} alignItems={"center"}>
									<label htmlFor="loginEmail">
										Email <span>*</span>
									</label>
									<p className="form-error">{errors.loginEmail?.message}</p>
								</Stack>
								<input
									type="email"
									id="loginEmail"
									placeholder="Your email*"
									{...register("loginEmail")}
								/>

								<Stack direction={"row"} gap={"2rem"} alignItems={"center"}>
									<label htmlFor="loginPassword">
										Password <span>*</span>
									</label>
									<p className="form-error">{errors.loginPassword?.message}</p>
								</Stack>
								<input
									type="password"
									id="loginPassword"
									placeholder="Password*"
									{...register("loginPassword")}
								/>

								<Link to="#!" className="forgotPassword">
									Forgot your password?
								</Link>
								<input type="submit" className="btn btn-dark" value={"SUBMIT"} />
							</form>
							<DevTool control={control} />
						</div>

						<div className="new-customer">
							<Typography variant="h3" component={"h2"} mb={"2rem"}>
								New Customer
							</Typography>
							<p>
								Sign up for early Sale access plus tailored new arrivals, trends and promotions. To
								opt out, click unsubscribe in our emails.
							</p>
							<Link to="/register" className="btn btn-dark">
								CREATE ACCOUNT
							</Link>
						</div>
					</Stack>
				</div>
			</section>
		</main>
	);
};

export default Login;
