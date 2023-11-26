import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { appleLogo, cBackground,tBackground,watch1,watch2,watch3,watch4,watch5,watch6,watch7,watch8,watch9,watch10,watch11,watch12,watch13,watch14,watchbanner,customer1,customer2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const watches = [
    {
        thumbnail: watch1,
        bigWatch: watch1,
    },
    {
        thumbnail: watch2,
        bigWatch: watch2,
    },
    {
        thumbnail: watch3,
        bigWatch: watch3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: watch4,
        name: "Watch-SE",
        price: "$200.20",
    },
    {
        imgURL: watch5,
        name: "Series-9",
        price: "$210.97",
    },
    {
        imgURL: watch6,
        name: "Ultra-Max",
        price: "$520.22",
    },
    {
        imgURL: watch7,
        name: "Series-2",
        price: "$195.43",
    },
    {
        imgURL: watch8,
        name: "Series-4",
        price: "$212.75",
    },
    {
        imgURL: watch9,
        name: "Nike-S",
        price: "$230.20",
    },
    {
        imgURL: watch10,
        name: "Sleek-V",
        price: "$540.10",
    },
    {
        imgURL: watch11,
        name: "Hermes",
        price: "$621.60",
    },
    {
        imgURL: watch12,
        name: "Sport",
        price: "$913.46",
    },
    {
        imgURL: watch13,
        name: "Series-3",
        price: "$121.40",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Series 1", link: "/" },
            { name: "Ultra Max", link: "/" },
            { name: "Sport Series", link: "/" },
            { name: "Glam Series", link: "/" },
            { name: "Nike Edition", link: "/" },
            { name: "Hermes", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@apple-watch.com", link: "mailto:customer@apple-watch.com" },
            { name: "+2347061703817", link: "tel:+2347061703817" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];