import Layout from "../components/layout";
import Image from "next/image";
import east_arm_civil from "../public/images/webp/east_arm_civil.webp";
import tanami_rural_property from "../public/images/webp/tanami_rural_property.webp";
import "swiper/css/bundle";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, EffectCoverflow, Navigation, Pagination,} from "swiper";
import CallToAction from "../components/calltoaction";
import call_to_action from "../public/images/tib photos/shutterstock_761906878.jpg";
import SEO from "../components/SEO";
import React from "react";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);
const testimonialData = [
    {
        company: "Tanami Rural Property",
        text: "Tanami Rural Property and associated entities have been insuring with Territory Insurance Brokers for over 15 years.  We use a range of insurance products from Business, Professional Indemnity, Workers Compensation, Travel, House & Contents and Livestock and rely on the industry knowledge and expert advice from Principal Andrew Byrne to assist us with the best product and quotes in the industry.  We highly recommend Andrew and his assistance over the years we have been in business has been invaluable.",
        image: tanami_rural_property,
        color: "bg-gray-500",
      alt: "tanami rural property"
    },
    {
        company: "East Arm Civil",
        text: "Andrew Byrne has been East Arm Civils’ insurance broker for the past 10 years.  We rely on his knowledge, experience and advice to assist with our business planning and operations.  Our fleet and property portfolios are sufficiently insured and we are comfortable our Business needs are reviewed and advised on by Andrew on a regular basis.  Andrew provides a service not often seen in businesses anymore and we frequently refer Andrew to our Industry peers.",
        image: east_arm_civil,
        color: "bg-gray-500",
      alt: "east arm civil"
    },
];

const Testimonials = () => {
    return (
        <div>
            <SEO title={"Territory Insurance Brokers - Testimonials"}
                 description={`Hear directly from our clients about their experience using our services. We are proud to have represented thousands of customers around Australia from all walks of life.`}
                 url={"https://territoryinsurancebrokers.com.au/testimonials"}/>
            <Layout>
                <main>
                    <div>
                        <h1
                            className={
                                "text-2xl text-center xs:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-700 my-8 md:mt-16 xl:mt-24 "
                            }
                        >
                            Testimonials
                        </h1>

                        <div>
                            <p
                                className={
                                    "text-sm xs:text-base xl:text-lg max-w-2xl xl:max-w-3xl mx-auto text-center"
                                }
                            >
                                Hear directly from our clients about their experience using our
                                services. We are proud to have represented thousands of
                                customers around Australia from all walks of life.
                                <br/>
                                <br/>
                                If you would like to leave us a review, please do so in the
                                contact us section.
                            </p>
                        </div>
                    </div>
                    <Swiper
                        navigation={true}
                        autoHeight={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        speed={1000}
                        pagination={true}
                        effect={"coverflow"}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 100,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        className="rounded-xl m-16 xl:mt-24"
                    >
                        {testimonialData.map((item, i) => (
                            <SwiperSlide key={i.toString()} slide>
                                <Testimonial {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <section>
                        <CallToAction
                            link={"/faq"}
                            image={call_to_action}
                            color={"bg-gray-400"}
                            title={"Have any questions?"}
                            text={
                                "We have a Frequently Asked Questions section that answer the most common questions. If you have any additional questions please visit our contact us page."
                            }
                            buttonTitle={"Frequently Asked Questions"}
                            alt={"two workers looking at a blueprint"}
                        />
                    </section>
                </main>
            </Layout>
        </div>
    );
};

const Testimonial = ({company, text, image, color, alt}) => {
    return (
        <SwiperSlide>
            <div className="mx-auto overflow-hidden rounded-lg">
                <div className="relative max-w-7xl mx-auto ">
                    <div
                        className={`relative py-8 lg:py-16 px-16 rounded-xl  lg:px-24 ${color}`}
                    >
                        <div className="absolute inset-0 opacity-80 filter  mix-blend-multiply">
                            <div className={"relative h-full"}>
                                <Image
                                    placeholder={"blur"}
                                    src={image}
                                    alt={alt}
                                    objectFit={"cover"}
                                    layout={"fill"}
                                    objectPosition={"center"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative ">
                            <p className="text-xl text-center sm:text-2xl font-medium mb-8 mx-auto text-white">
                                {company}
                            </p>
                            <blockquote className="mt-6 text-white text-center">
                                <p className="text-base sm:text-lg">{text}</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default Testimonials;
