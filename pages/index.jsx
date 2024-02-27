import Layout from "../components/layout";
import Card from "../components/card";
import Link from "next/link";

import main_image from "../public/images/tib photos/shutterstock_259116644.jpg";
import call_to_action from "../public/images/tib photos/shutterstock_1301206006.jpg";
import Image from "next/image";
import {faBoxOpen, faCommentDots, faPenAlt, faQuestionCircle,} from "@fortawesome/free-solid-svg-icons";
import CallToAction from "../components/calltoaction";
import HomeBanner from "../components/home-banner";
import SEO from "../components/SEO";
import React from "react";

const cards = [
    {
        id: 1,
        title: "Insurance Products",
        text: "We can help arrange a wide selection of insurance policies to fit a variety of circumstances, including business, trade and rural, and residential insurance. Start the process today by contacting us, and we will do the rest.",
        buttonTitle: "Explore Products",
        icon: faBoxOpen,
        link: "/insurance-products",
    },
    {
        id: 2,
        title: "Testimonials",
        text: "Hear directly from our clients about their experience with us. We are proud to have represented many customers around Australia from all walks of life. Please feel free to leave a review in the contact section.",
        buttonTitle: "Read Reviews",
        icon: faCommentDots,
        link: "/testimonials",
    },
    {
        id: 3,
        title: "Frequently Asked Questions",
        text: "Insurance can be confusing at the best of times, so we have listed a few common questions that may help you understand the process a little better. Feel free to contact us with additional questions.",
        buttonTitle: "Find Answers",
        icon: faQuestionCircle,
        link: "/faq",
    },
    {
        id: 4,
        title: "Request A Quote",
        text: "Territory Insurance Brokers are here for you every step of the way. When you're ready to find the right insurance for you, fill out the quick form, and we will be in touch to take care of everything else.",
        buttonTitle: "Get Started",
        icon: faPenAlt,
        link: "/get-a-quote",
    },
];

const Home = () => {
    return (
        <div>
            <SEO title={"Territory Insurance Brokers - Insuring Businesses, Trades, Homes & More"}
                 description={`We help place a range of insurance products from business, trade and residential coverage.`}
                 url={"https://territoryinsurancebrokers.com.au/"}/>
            <HomeBanner/>
            <Layout>
                <main>
                    <div>
                        <h1
                            className={
                                "text-2xl xs:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-700 my-8 md:my-16 xl:my-24"
                            }
                        >
                            Protecting the things you love.
                        </h1>
                        <div
                            className={
                                "grid grid-cols-1 lg:grid-cols-3 md:gap-16 flex justify-center items-center mx-auto "
                            }
                        >
                            <div className={"sm:col-span-2 mb-4"}>
                                <p className={"text-sm xs:text-base lg:max-w-2xl xl:text-lg"}>
                                    We help place a range of insurance products from business,
                                    trade and residential coverage. We go above and beyond to
                                    support what you love most and seek to ensure that you can always keep
                                    growing no matter what is thrown your way.
                                    <br/>
                                    <br/>
                                    <Link href={"/contact-us"}>
                                        <a className={"font-semibold"}>Contact us</a>
                                    </Link>{" "}
                                    today, and rest easy knowing we have your back.
                                </p>
                                {
                                    /*
                                         <div
                                    className={
                                      "flex items-center mt-8 xl:mt-16 space-x-4 xs:space-x-6"
                                    }
                                  >
                                    <Link href={"/about-us"}>
                                      <a>
                                        <Button
                                          large
                                          title="Find out more"
                                          icon={faChevronRight}
                                        />
                                      </a>
                                    </Link>
                                    <a href={"https://www.facebook.com"}>
                                      <FontAwesomeIcon
                                        className={"text-2xl xs:text-3xl text-gray-700"}
                                        icon={faFacebook}
                                      />
                                    </a>
                                    <a href={"https://www.instagram.com"}>
                                      <FontAwesomeIcon
                                        className={"text-2xl xs:text-3xl text-gray-700"}
                                        icon={faInstagram}
                                      />
                                    </a>
                                  </div>
                                     */
                                }
                            </div>
                            <div className={"max-w-sm mx-auto w-full h-96 mt-8 shadow-lg relative md:my-0 md:h-80 lg:h-96 object-top"}>
                                <Image
                                    src={main_image}
                                    alt={"are you insured?"}
                                    priority={true}
                                    objectFit={"cover"}
                                    layout="fill"
                                    objectPosition={"top"}
                                    className={"rounded"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"mt-16 xl:mt-32 grid gap-8 lg:grid-cols-2 md:gap-16"}>
                        {cards.map((item) => (
                            <Card key={item.id.toString()} {...item} />
                        ))}
                    </div>
                    <CallToAction
                        link={"/insurance-products"}
                        image={call_to_action}
                        color={"bg-gray-400"}
                        title={"Ready to get started?"}
                        text={
                            "We can help arrange a variety of insurance products for our clients. From Management Liablity and Trade Insurance to Home & Contents, Motor Vehicle, and many more.  Whether it's your home or business, we've got you covered."
                        }
                        alt={"heavy machinery"}
                        buttonTitle={"Insurance Products"}
                    />
                </main>
            </Layout>
        </div>
    );
};

export default Home;
