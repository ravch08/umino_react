import React from 'react';
import { Card, Stack } from '@mui/material';

import { blogItems } from '../utils/data';
import { Link } from 'react-router-dom';

const Blog = () => {

   return (
      <section className="blog">
         <div className="container">
            <Stack
               gap={{ xs: '5rem', md: '2rem' }}
               flexWrap={'wrap'}
               alignItems={'center'}
               justifyContent={'space-between'}
               direction={{ xs: 'column', md: 'row' }}
            >
               {blogItems?.map(item => {
                  return (
                     <Card
                        key={item.id}
                        className='blog-item'
                        sx={{
                           boxShadow: 'none',
                           borderRadius: '0',
                           width: { xs: '100%', md: '45%', lg: '30%' },
                        }}
                     >
                        <figure><img src={item.imgSrc} alt={item.title} /></figure>

                        <div className="blog-content">
                           <span>{item.category}</span>
                           <Link to="#!"><h3>{item.title}</h3></Link>
                           <p>{item.description}</p>
                        </div>

                        <Stack
                           gap={'2rem'}
                           direction={'row'}
                           className="blog-footer"
                        >
                           <span>{item.date}</span>
                           <span>POST BY: {item.author}</span>
                        </Stack>
                     </Card>
                  )
               })}
            </Stack>
         </div>
      </section >
   )
}

export default Blog;