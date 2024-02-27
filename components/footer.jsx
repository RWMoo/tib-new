import React from "react";
import Link from "next/link";
import Image from "next/image";
import tib_logo from "../public/images/tib-final-small-02-02.svg";

const navigation = [
    {
        title: "Links",
        links: [
            {name: "Home", href: "/"},
            {name: "About Us", href: "/about-us"},
            {name: "Testimonials", href: "/testimonials"},
            {name: "FAQ", href: "/faq"},
        ],
    },
    {
        title: "products",
        links: [
            {
                name: "Business & Corporate",
                href: "/insurance-products#business",
            },
            {name: "Trade & Rural", href: "/insurance-products#trade"},
            {
                name: "Residential",
                href: "/insurance-products#residential",
            },
            {name: "All Products", href: "/insurance-products"},
        ],
    },
    {
        title: "contact",
        links: [
            {name: "Get In Touch", href: "/contact-us"},
            {name: "Get A Quote", href: "/get-a-quote"},
        ],
    },
    {
        title: "legal",
        links: [
            {name: "Terms & Conditions", href: "/terms-and-conditions"},
            {name: "Privacy Policy", href: "/privacy-policy"},
        ],
    },
];

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer
            className="mx-auto p-4 py-8 md:p-6 md:py-12 w-full bg-gray-100 mt-16 xl:mt-32"
            aria-labelledby="footer-heading"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col justify-around mr-4 lg:mr-16">
                        <div
                            className="flex flex-row md:flex-col items-center lg:items-start justify-start lg:justify-between space-x-8 md:space-x-0 md:space-y-8">
                            <div>
                                <Link href="/" className="flex">
                                    <a>
                                        <span className="sr-only">Territory Insurance Brokers</span>
                                        <div className={"relative w-12 h-12 lg:w-14 lg:h-14 mb-2"}>
                                            <Image src={tib_logo} layout={"fill"} alt="Territory Insurance Brokers Icon"/>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <p className="text-gray-600 text-xs md:text-sm font-bold xl:text-base leading-relaxed lg:max-w-xs">
                                We know how to protect the things you love.
                            </p>
                        </div>
                        {/*
            <div className="flex space-x-4 mt-12 md:mx-auto lg:mx-0">
              <FontAwesomeIcon
                className="text-2xl text-gray-600"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="text-2xl text-gray-600"
                icon={faInstagram}
              />
            </div>
            */}
                    </div>
                    <div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-12 md:gap-0 flex justify-evenly w-full mt-12 lg:mt-0 w-full">
                        {navigation.map((item, index) => {
                            return (
                                <div key={index.toString()} className="md:mx-auto">
                                    <p className="uppercase mb-4 font-bold text-sm text-yellow-500">
                                        {item.title}
                                    </p>
                                    <ul className="space-y-3">
                                        {item.links.map(({name, href}, i) => {
                                            return (
                                                <li
                                                    className="list-none text-xs md:text-sm font-medium lg:text-base text-gray-500 hover:text-gray-800"
                                                    key={i.toString()}
                                                >
                                                    <Link href={href}>
                                                        <a>{name}</a>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <p className="text-xs  mt-8 md:mt-12 text-gray-500 leading-relaxed">
                    Territory Insurance Brokers (AR number 1243600) is an Authorised
                    Representative of Marsh Pty Ltd (ABN 86 004 651 512, AFSL 238983) who
                    arrange insurance and are not an insurer. This website contains
                    general information, does not take into account your individual
                    objectives, financial situation or needs and may not suit your
                    personal circumstances. For full details of the terms, conditions and
                    limitations of the covers and before making any decision about whether
                    to acquire a product, refer to the specific policy wordings and/or
                    Product Disclosure Statements available from Territory Insurance
                    Brokers on request.
                </p>
                <div className="mt-4 border-t border-gray-200 pt-8 text-center">
                    <Link href={"/FinancialServicesGuide.pdf"} alt="alt text"
                    >
                        <p className="text-xs md:text-sm text-blue-400 underline xl:text-center mb-4">
                            Financial Service Guide
                        </p>
                    </Link>
                    <p className="text-xs md:text-sm text-gray-400 xl:text-center">
                        &copy;{" "}
                        {`${date} Territory Insurance Brokers, Inc. All rights reserved.`}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
