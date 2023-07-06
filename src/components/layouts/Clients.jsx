import React from 'react';
import { Stack } from '@mui/material';

import { clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6 } from "../utils/helper";

const Clients = () => {

   return (
      <section className="clients">
         <div className="container">
            <Stack gap={"3rem"} direction={'row'}>
               <figure><img src={clientLogo1} alt="client" /></figure>
               <figure><img src={clientLogo2} alt="client" /></figure>
               <figure><img src={clientLogo3} alt="client" /></figure>
               <figure><img src={clientLogo4} alt="client" /></figure>
               <figure><img src={clientLogo5} alt="client" /></figure>
               <figure><img src={clientLogo6} alt="client" /></figure>
            </Stack>
         </div>
      </section>
   )
}

export default Clients;