import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

import { contactAddressItems } from "../utils/data";
import { Location } from "../utils/helper";

const contactSchema = z.object({
	contactFullName: string()
		.min(5, { message: "Must be 4 or more characters long" })
		.max(24, { message: "Must be s4 characters or less" }),
	contactEmail: z
		.string()
		.email({ message: "Invalid email address" })
		.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
	contactText: z.string().min(6, { message: "Must be 6 or more characters long." }),
});

type ContactSchemaProps = z.infer<typeof contactSchema>;

const Contact = () => {
	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ContactSchemaProps>({ resolver: zodResolver(contactSchema) });

	const submitHandler = (data: ContactSchemaProps) => {
		console.log(data);
		reset();
	};

	return (
		<main>
			<Location />
			<section className="contactInfo" aria-labelledby="Contact Information">
				<div className="container">
					<div className="section-heading">
						<h2>Here to Help</h2>
						<p>Have a question? You may find an answer in our FAQs. But you can also contact us:</p>
					</div>

					<Stack
						gap={"2rem"}
						flexWrap={"wrap"}
						alignItems={"start"}
						justifyContent={"space-between"}
						direction={{ xs: "column", md: "row" }}
					>
						{contactAddressItems?.map((item) => {
							return (
								<Stack direction={"column"} className="address-item" key={item.id}>
									<Typography variant="h4" mb={"2rem"} component={"h2"}>
										{item.branch}
									</Typography>
									<p>{item.address}</p>
									<a href={`tel:+${item.tel}`} className="address-phone">
										Tel: {item.tel}
									</a>
									<p>
										<span>Opening Hours:</span> {item.hours}
									</p>
								</Stack>
							);
						})}
					</Stack>
				</div>
			</section>

			<section className="contactForm">
				<div className="container">
					<div className="section-heading">
						<h2>Get in Touch</h2>
						<p>
							We'd love to hear from you about our entire service. Your comments and suggestions
							will be highly appreciated. Please complete the form below.
						</p>
					</div>

					<div className="form">
						<form className="contact-form" onSubmit={handleSubmit(submitHandler)}>
							<Stack direction={{ xs: "column", md: "row" }} gap={"2rem"} alignItems={"center"}>
								<div className="form-control">
									<label htmlFor="contactFullName">
										Full Name <span>*</span>
									</label>
									<input
										autoFocus
										type="text"
										placeholder="Full Name*"
										{...register("contactFullName")}
									/>
									<p className="form-error">{errors.contactFullName?.message}</p>
								</div>

								<div className="form-control">
									<label htmlFor="contactEmail">
										Email <span>*</span>
									</label>
									<input type="email" placeholder="Your email*" {...register("contactEmail")} />
									<p className="form-error">{errors.contactEmail?.message}</p>
								</div>
							</Stack>

							<textarea rows={8} placeholder="Comment" {...register("contactText")}></textarea>

							<input type="submit" className="btn btn-dark" value="SEND MESSAGE" />
						</form>
						<DevTool control={control} />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Contact;
