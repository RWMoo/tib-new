import Layout from "../components/layout";
import Banner from "../components/banner";
import main_image from "../public/images/tib photos/shutterstock_685560493.jpg";
import banner from "../public/images/tib photos/shutterstock_1482686492.jpg";
import Image from "next/image";
import {faClipboardCheck, faLightbulb, faMapMarked, faUsers,} from "@fortawesome/free-solid-svg-icons";
import Info from "../components/info";
import SEO from "../components/SEO";

const Home = () => {
    return (
        <div>
            <SEO title={"Territory Insurance Brokers - About Us"}
                 description={`We have helped arrange insurance coverage to Australians for over 20 years. We have served thousands of clients and have the experience to help you through the good times and the bad. Our number one priority is our clients, and we excel at arranging great insurance solutions for you.`}
                 url={"https://territoryinsurancebrokers.com.au/about-us"}/>
            <Banner image={banner} alt={"mango trees"}/>
            <Layout>
                <main>
                    <div>
                        <h1
                            className={
                                "text-2xl xs:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-700 my-8 md:my-16 xl:my-24 xl:mb-20"
                            }
                        >
                            About Us
                        </h1>
                        <div
                            className={
                                "grid grid-cols-1 md:grid-cols-2 md:gap-16 xl:gap-24 flex justify-center items-center"
                            }
                        >
                            <div>
                                <p className={"text-sm xs:text-base xl:text-lg"}>
                                    We have helped arrange insurance coverage to Australians for
                                    over 20 years. We have served thousands of clients and have
                                    the experience to help you through the good times and the bad.
                                    Our number one priority is our clients, and we excel at arranging great insurance
                                    solutions for you.<br/>
                                    <br/> We help you find the great options to keep your valuables
                                    covered, whether it is your home, business, trade
                                    or your farm. No job is too big or small, and no matter your
                                    situation, we look to help. We can help arrange a wide range of insurance
                                    policies, including Workers Compensation, Corporate Risk,
                                    Public Liability, and many more.
                                </p>
                            </div>
                            <div className={"mt-8 shadow-lg relative h-56 md:my-0 md:h-full"}>
                                <Image
                                    placeholder={"blur"}
                                    src={main_image}
                                    alt={"cattle ranch"}
                                    objectFit={"cover"}
                                    layout="fill"
                                    objectPosition={"center"}
                                    className={"rounded"}
                                />
                            </div>
                        </div>
                    </div>
                    <section
                        className={
                            "grid gap-8 mt-8 md:grid-cols-2 gap-16  md:gap-16 md:gap-y-24 xl:gap-24 xl:gap-y-32 mt-24 xl:mt-40"
                        }
                    >
                        <Info
                            title={"Experienced"}
                            text={
                                "With over 20 years of experience in insurance broking, we provide great customer service and can arrange a variety of insurance solutions."
                            }
                            icon={faLightbulb}
                        />
                        <Info
                            title={"Client Focused"}
                            text={
                                "Our number one priority is our clients. We work closely with you so you can choose the product which will help protect what is important to you. "
                            }
                            icon={faUsers}
                        />
                        <Info
                            title={"Australia-wide Service"}
                            text={
                                "Whether you are based in a remote location or in a busy city, we make it easy to find insurance solutions with smooth communication."
                            }
                            icon={faMapMarked}
                        />
                        <Info
                            title={"Extensive Coverage"}
                            text={
                                "We have an extensive range of insurance policies available. These include Workers Compensation, Corporate Risk, Public Liability."
                            }
                            icon={faClipboardCheck}
                        />
                    </section>
                    <section>
                        <h2 className={"text-xl font-semibold  mb-4 xl:mb-8  mt-16"}>
                            Disclaimer
                        </h2>
                        <p className={"text-sm xs:text-base xl:text-lg disclaimer"}>
                            Territory Insurance Brokers (AR Number 1243600) is an Authorised
                            Representative of Marsh Pty Ltd (ABN 86 004 651 512, AFSL 238983)
                            who arrange insurance and are not an insurer. This website
                            contains general information, does not take into account your
                            individual objectives, financial situation or needs and may not
                            suit your personal circumstances. For full details of the terms,
                            conditions and limitations of the covers and before making any
                            decision about whether to acquire a product, refer to the specific
                            policy wordings and/or Product Disclosure Statements available
                            from Territory Insurance Brokers on request.
                        </p>
                    </section>
                </main>
            </Layout>
        </div>
    );
};

export default Home;
