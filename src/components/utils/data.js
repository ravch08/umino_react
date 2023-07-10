import {
   category1, category2, category3, category4, category5, category6, salesBanner1, salesBanner2, shipping1, shipping2, shipping3, blog1, blog2, blog3, banner1, banner2, banner1_768, banner2_768, banner1_1024, banner2_1024, banner1_1200, banner2_1200, bannerAboutUs, whychoose1, whychoose2, whychoose3, product1_1, product1_2, product2_1, product2_2, product3_1, product3_2, product4_1, product4_2, product5_1, product5_2, product6_1, product6_2, product7_1, product7_2, product8_1, product8_2, product9_1, product9_2, product10_1, product10_2
} from "../utils/helper";

// export const svgs = {
//    iconClose: <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 36 36">
//       <title>ic_close_36px</title>
//       <g className="nc-icon-wrapper">
//          <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
//       </g>
//    </svg>
// };

export const categoryItems = [
   {
      id: 'cat1',
      imgSrc: category1,
      title: 'Sofa',
   },
   {
      id: 'cat2',
      imgSrc: category2,
      title: 'Lighting',
   },
   {
      id: 'cat3',
      imgSrc: category3,
      title: 'Bathroom',
   },
   {
      id: 'cat4',
      imgSrc: category4,
      title: 'Bedrooom',
   },
   {
      id: 'cat5',
      imgSrc: category5,
      title: 'Outdoor',
   },
   {
      id: 'cat6',
      imgSrc: category6,
      title: 'Home Kitchen',
   },
];

export const salesItems = [
   {
      id: "sal1",
      link: "#!",
      imgSrc: salesBanner1,
      title: "Top Trend Style",
      superHeading: "SALE 50% OFF",
      description: "In-store & online. HUrry up! Limited time offer.",
   },
   {
      id: "sal2",
      link: "#!",
      imgSrc: salesBanner2,
      title: "Here's to You",
      superHeading: "Hot Under $59",
      description: "Discover selected items with many discounts.",
   },
];

export const shippingItems = [
   {
      id: 'sh1',
      imgSrc: shipping1,
      title: 'Free Shipping',
      description: `Get complimentary ground shipping on every order. Don't love it? Send it back, on us.`,
   },
   {
      id: 'sh2',
      imgSrc: shipping2,
      title: 'Free Returns',
      description: `Free returns within 10 days, please make sure the items are in undamaged condition.`,
   },
   {
      id: 'sh3',
      imgSrc: shipping3,
      title: 'Support Online',
      description: `We support customers 24/7, send questions we will solve for you immediately.`,
   },
];

export const blogItems = [
   {
      id: 'b1',
      imgSrc: blog1,
      date: 'Apr 28 2023',
      author: 'Ruston Grey',
      category: 'FURNITURE',
      title: 'Restoring Old Furniture Pieces',
      description: `These are the people who make your life asier. Large tiles were arranged on the counter top plate near the window of the living room, they...`,
   },
   {
      id: 'b2',
      imgSrc: blog2,
      date: 'May 21 2023',
      author: 'Sasha Brown',
      category: 'FURNITURE',
      title: 'Eco-friendly Furniture For Home',
      description: `These are the people who make your life asier. Large tiles were arranged on the counter top plate near the window of the living room, they...`,
   },
   {
      id: 'b3',
      imgSrc: blog3,
      date: 'Jun 18 2023',
      author: 'John Marvel',
      category: 'FURNITURE',
      title: 'Investing In High-quality Furniture',
      description: `These are the people who make your life asier. Large tiles were arranged on the counter top plate near the window of the living room, they...`,
   },
];

export const bannerItems = [
   {
      id: 'bn1',
      imgSrc: banner1,
      imgSrc768: banner1_768,
      imgSrc1024: banner1_1024,
      imgSrc1200: banner1_1200,
      title: 'Bedroom Textiles',
      superHeading: 'Beautiful & Elegant',
      subHeading: 'Discount 50% on Products & Free Shipping.',
   },
   {
      id: 'bn2',
      imgSrc: banner2,
      imgSrc768: banner2_768,
      imgSrc1024: banner2_1024,
      imgSrc1200: banner2_1200,
      title: 'Pendant Light',
      superHeading: 'Kitchen Tools ',
      subHeading: 'Discount 50% on Products & Free Shipping.',
   },
];

export const pageBannerItems = [
   {
      id: 'pgb1',
      imgSrc: bannerAboutUs,
      title: 'Our Perfect Store',
      superHeading: 'WELCOME TO UMINO',
      description: `Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect.`,
   },
];

export const whyChooseItems = [
   {
      id: 'wc1',
      imgSrc: whychoose1,
      title: "Unique for Women’s",
      description: `Our collections dress a unique and feminine woman. The pieces showcase a timeless style while keeping in mind fashion aesthetics and trends.`,
   },
   {
      id: 'wc2',
      imgSrc: whychoose2,
      title: "Elegant for Men’s",
      description: `From traditional tailoring to the most informal pieces. Our Umino Man collections feature the latest trends with the maximum comfort.`,
   },
   {
      id: 'wc3',
      imgSrc: whychoose3,
      title: "Freedom for Everyone",
      description: `The designs have been created adopting the current trends, while leaving room for personal expression among young people.`,
   },
];

export const productItems = [
   {
      id: 'pr1',
      stars: 0,
      price: 280.00,
      cartQuantity: 1,
      priceCrossed: "",
      imgSrc1: product1_1,
      imgSrc11: product1_2,
      title: 'Form Chair Brass Base',
      category: ['Sofa', 'Outdoor', 'Bathroom'],
   },
   {
      id: 'pr2',
      stars: 5,
      price: 80.00,
      cartQuantity: 1,
      priceCrossed: "",
      imgSrc1: product2_1,
      imgSrc11: product2_2,
      title: 'Vase Echasse Large',
      category: ['Outdoor', 'Home Kitchen', 'Bedroom'],
   },
   {
      id: 'pr3',
      stars: 1,
      price: 150.00,
      cartQuantity: 1,
      priceCrossed: "",
      imgSrc1: product3_1,
      imgSrc11: product3_2,
      title: 'Simple Model Chair',
      category: ['Sofa', 'Outdoor',],
   },
   {
      id: 'pr4',
      stars: 4,
      price: 120.00,
      cartQuantity: 1,
      priceCrossed: "",
      imgSrc1: product4_1,
      imgSrc11: product4_2,
      title: 'Bottle Grinder of Pepper',
      category: ['Home Kitchen', 'Bathroom'],
   },
   {
      id: 'pr5',
      stars: 4,
      price: 120.00,
      cartQuantity: 1,
      priceCrossed: 130.00,
      imgSrc1: product5_1,
      imgSrc11: product5_2,
      title: 'Form Bar Stool Oak Base',
      category: ['Sofa', 'Outdoor'],
   },
   {
      id: 'pr6',
      stars: 3,
      price: 160.00,
      cartQuantity: 1,
      priceCrossed: 200.00,
      imgSrc1: product6_1,
      imgSrc11: product6_2,
      title: 'Carrie Table Lamp',
      category: ['Outdoor', 'Lighting', 'Bedroom', 'Home Kitchen'],
   },
   {
      id: 'pr7',
      stars: 5,
      price: 60.00,
      cartQuantity: 1,
      priceCrossed: "",
      imgSrc1: product7_1,
      imgSrc11: product7_2,
      title: 'Wooden Lamp Drop',
      category: ['Outdoor', 'Lighting', 'Bedroom', 'Home Kitchen'],
   },
   {
      id: 'pr8',
      stars: 4,
      price: 60.00,
      cartQuantity: 1,
      priceCrossed: "",
      imgSrc1: product8_1,
      imgSrc11: product8_2,
      title: 'Hammershoi Spice Mill Small',
      category: ['Home Kitchen', 'Bathroom'],
   },
   {
      id: 'pr9',
      stars: 5,
      price: 300.00,
      cartQuantity: 1,
      priceCrossed: "",
      imgSrc1: product9_1,
      imgSrc11: product9_2,
      title: 'Wave Sideboard Anthracite',
      category: ['Outdoor', 'Home Kitchen'],
   },
   {
      id: 'pr10',
      stars: 4,
      price: 160.00,
      cartQuantity: 1,
      priceCrossed: 200.00,
      imgSrc1: product10_1,
      imgSrc11: product10_2,
      title: 'Form Armchair Black',
      category: ['Sofa', 'Outdoor', 'Bedroom'],
   },
];

export const contactAddressItems = [
   {
      id: 'add1',
      tel: '+222-1800-262',
      branch: 'Umino - United States',
      hours: 'Everyday 9:00 am - 6:00 pm',
      address: '68 St, South New York/NY 98944, United States. blueskytechcompany@gmail.comm',
   },
   {
      id: 'add2',
      tel: '+222-1800-262',
      branch: 'Umino - India',
      hours: 'Everyday 9:00 am - 6:00 pm',
      address: '68 St, South New York/NY 98944, United States. blueskytechcompany@gmail.comm',
   },
   {
      id: 'add3',
      tel: '+222-1800-262',
      branch: 'Umino - United Kingdom',
      hours: 'Everyday 9:00 am - 6:00 pm',
      address: '68 St, South New York/NY 98944, United States. blueskytechcompany@gmail.comm',
   },
];