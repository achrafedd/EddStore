// Services
import Shipping from "../assets/images/service.png";
import Gift from "../assets/images/service-02.png";
import Support from "../assets/images/service-03.png";
import Discount from "../assets/images/service-04.png";
import Payment from "../assets/images/service-05.png";

export const services = [
    {
        image: Shipping,
        title: "Free Shipping",
        desc: "From all orders over $100",
    },
    {
        image: Gift,
        title: "Daily surprise offers",
        desc: "Save up to 25% off",
    },
    {
        image: Support,
        title: "Support 24/7",
        desc: "Shop with an expert",
    },
    {
        image: Discount,
        title: "Affordable prices",
        desc: "Get factory direct price",
    },
    {
        image: Payment,
        title: "Secure payments",
        desc: "100% protected payment",
    },
];

// Categories

import Laptop from "../assets/images/laptop.jpg";
import Camera from "../assets/images/camera.jpg";
import Tv from "../assets/images/tv.jpg";
import SmartWatch from "../assets/images/watch.jpg";
import Headphone from "../assets/images/headphone.jpg";
import Accessories from "../assets/images/acc.jpg";
import HomeAppliances from "../assets/images/homeapp.jpg";
import Speakers from "../assets/images/speaker.jpg";

export const categories = [
    { title: "Laptop", image: Laptop, items: 10 },
    { title: "Camera", image: Camera, items: 5 },
    { title: "TV", image: Tv, items: 15 },
    { title: "Smart Watchs", image: SmartWatch, items: 20 },
    { title: "HeadPhone", image: Headphone, items: 8 },
    { title: "Accessories", image: Accessories, items: 30 },
    { title: "Home Appliances", image: HomeAppliances, items: 10 },
    { title: "Speakers", image: Speakers, items: 7 },
];

// Products

export const productsItems = [
    {
        id: 1,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
        title: "Iphone 14dfsqdfqsdfqsdfs qdfdsfsdfs dfsdfsdf sdfsdfsdfsd",
        price: 1299,
        description: "good phone",
        category: "phone",
        brand: "Apple",
        rate: 4.8,
    },
    {
        id: 2,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
        title: "Iphone 14",
        price: 1299,
        description: "good phone",
        category: "phone",
        brand: "Apple",
        rate: 4.8,
    },
    {
        id: 3,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
        title: "Iphone 14",
        price: 1299,
        description: "good phone",
        category: "phone",
        brand: "Apple",
        rate: 4.8,
    },
];

// Brands

import Brand01 from "../assets/images/brand-01.png";
import Brand02 from "../assets/images/brand-02.png";
import Brand03 from "../assets/images/brand-03.png";
import Brand04 from "../assets/images/brand-04.png";
import Brand05 from "../assets/images/brand-05.png";
import Brand06 from "../assets/images/brand-06.png";
import Brand07 from "../assets/images/brand-07.png";
import Brand08 from "../assets/images/brand-08.png";

export const brands = [
    { id: 1, image: Brand01, name: "Apple" },
    { id: 2, image: Brand02, name: "Bose" },
    { id: 3, image: Brand03, name: "Canon" },
    { id: 4, image: Brand04, name: "Dell" },
    { id: 5, image: Brand05, name: "Intel" },
    { id: 6, image: Brand06, name: "LG" },
    { id: 7, image: Brand07, name: "Samsung" },
    { id: 8, image: Brand08, name: "Sandisk" },
];

// Blogs

export const blogs = [
    {
        id: 1,
        image: "https://www.technewsworld.com/wp-content/uploads/sites/3/2022/02/cybersecurity-lock.jpg",
        title: "Title 01",
        date: "10/04/2023",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        id: 2,
        image: "https://www.technewsworld.com/wp-content/uploads/sites/3/2022/02/cybersecurity-lock.jpg",
        title: "Title 02 qsdqad qsddqsdqd azeazeazeazeazeaz",
        date: "01/30/2023",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        id: 3,
        image: "https://www.technewsworld.com/wp-content/uploads/sites/3/2022/02/cybersecurity-lock.jpg",
        title: "Title 03",
        date: "02/22/2023",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        id: 4,
        image: "https://www.technewsworld.com/wp-content/uploads/sites/3/2022/02/cybersecurity-lock.jpg",
        title: "Title 04",
        date: "02/20/2023",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        id: 5,
        image: "https://www.technewsworld.com/wp-content/uploads/sites/3/2022/02/cybersecurity-lock.jpg",
        title: "Title 05",
        date: "03/15/2023",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
];
