import axios from 'axios';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

import { PageBanner, bannerRegister } from "../utils/helper";

const Register = () => {

	// const API_KEY = process.env.VITE_API_KEY;
	// using VITE as build tool, so process is not available

	const API_KEY = import.meta.env.VITE_API_KEY;
	const API_URL = new URL(`https://identitytoolkit.googleapis.com/v1/accounts:signUp`)
	API_URL.searchParams.set('key', API_KEY);

	const url = API_URL.toString();

	const [isLogin, setIsLogin] = useState(false);
	const { register, reset, handleSubmit, control, formState: { errors } } = useForm();

	const registerHandler = data => {
		setIsLogin(prevState => !prevState);
		console.log("User Logged in!", data.registerEmail);
		reset();

		if (isLogin) {

		} else {
			axios.post(url, {
				email: data.registerEmail,
				password: data.registerPassword,
				returnSecureToken: true,
			}).then((response) => {
				console.log(response.status);
			});
		}
	}

	return (
		<main>
			<PageBanner
				imgSrc={bannerRegister}
				title="Register"
				superHeading="WELCOME TO UMINO"
			/>
			<section className="register">
				<div className="container">
					<div className="form">
						<Typography variant="h3" component={'h2'} mb={'4rem'} textAlign={'center'}>Register</Typography>

						<form onSubmit={handleSubmit(registerHandler)}>
							<Stack direction={'row'} gap={'1rem'} alignItems={'center'}>
								<label htmlFor="registerFirstName">First Name <span>*</span></label>
								<p className="form-error">{errors.registerFirstName?.message}</p>
							</Stack>
							<input type="text" id="registerFirstName" placeholder="First Name" {...register('registerFirstName', {
								required: {
									value: true,
									message: "FirstName must have atleast 6 letters & atmost 20 letters "
								},
								minLength: 4,
								maxLength: 20
							})} />

							<Stack direction={'row'} gap={'1rem'} alignItems={'center'}>
								<label htmlFor="registerLastName">Last Name <span>*</span></label>
								<p className="form-error">{errors.registerLastName?.message}</p>
							</Stack>
							<input type="text" id="registerLastName" placeholder="Last Name" {...register('registerLastName', {
								required: {
									value: true,
									message: "LastName must have atleast 6 letters & atmost 20 letters "
								},
								minLength: 4,
								maxLength: 20
							})} />

							<Stack direction={'row'} gap={'1rem'} alignItems={'center'}>
								<label htmlFor="registerEmail">Email <span>*</span></label>
								<p className="form-error">{errors.registerEmail?.message}</p>
							</Stack>
							<input type="email" id="registerEmail" placeholder="Your email*" {...register('registerEmail', {
								required: {
									value: true,
									message: "Email is Required!"
								},
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Invalid Email Format!"
								}
							})} />

							<Stack direction={'row'} gap={'1rem'} alignItems={'center'}>
								<label htmlFor="registerPassword">Password <span>*</span></label>
								<p className="form-error">{errors.registerPassword?.message}</p>
							</Stack>
							<input type="password" id="registerPassword" placeholder="Password*" {...register('registerPassword', {
								required: {
									value: true,
									message: "Password is Required!"
								},
								pattern: {
									value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
									message: 'Password must contain eight characters, at least one letter, one number, and one special character',
								}
							})} />

							<p>Your personal data will be used to support your experience throughout this website, to manage access to your account and for other purposes described in our privacy policy.
							</p>

							<input type="submit" className="btn btn-dark" value={'CREATE ACCOUNT'} />
							<Link to="/login" className='btn btn-light'>LOG IN</Link>
						</form>
						<DevTool control={control} />

					</div>
				</div>
			</section>
		</main >
	)
}

export default Register;