import React from "react";
import { Stack, Typography } from "@mui/material";

import { bannerLogin, PageBanner } from "../utils/helper";
import { Link } from "react-router-dom";

const Login = () => {
   return (
      <main>
         <PageBanner
            imgSrc={bannerLogin}
            title="Login"
            superHeading="WELCOME TO UMINO"
         />

         <section className="login-form" aria-labelledby="Login Form">
            <div className="container">
               <Stack
                  gap={'4rem'}
                  direction={{ xs: "column", lg: "row" }}
                  justifyContent={"space-between"}
               >
                  <div className="form">
                     <Typography variant="h3" component={'h2'} mb={'2rem'}> Login</Typography>
                     <form action="#!">
                        <label htmlFor="form_email">Email <span>*</span></label>
                        <input type="email" name="form_email" placeholder="Your email*" />

                        <label htmlFor="form_password">Password <span>*</span></label>
                        <input type="password" name="form_password" placeholder="Password*" />

                        <Link to="#!" className="forgotPassword">Forgot your password?</Link>
                        <input type="submit" className="btn btn-dark" value={'SUBMIT'} />
                     </form>
                  </div>

                  <div className="new-customer">
                     <Typography variant="h3" component={'h2'} mb={'2rem'}>New Customer</Typography>
                     <p>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
                     <Link to="/register" className="btn btn-dark">CREATE ACCOUNT</Link>
                  </div>
               </Stack>
            </div>
         </section>
      </main >
   );
};

export default Login;
