import React from 'react';
import { Clients, PageBanner, bannerBlogs } from "../utils/helper";

const BlogPage = () => {

  return (
    <main>
      <PageBanner
        imgSrc={bannerBlogs}
        title='Our Blogs'
        superHeading='WELCOME TO UMINO'
        description="Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect."
      />
      <Clients />
    </main>
  )
}

export default BlogPage