import Layout from "../components/layout";
import Banner from "../components/banner";
import banner from "../public/images/tib photos/shutterstock_376209520.jpg";
import {faBriefcase, faEnvelopeOpen, faQuestion, faUser,} from "@fortawesome/free-solid-svg-icons";

import Question from "../components/question";
import CallToAction from "../components/calltoaction";
import call_to_action from "../public/images/tib photos/shutterstock_598190453.jpg";
import Link from "next/link";
import SEO from "../components/SEO";
import React from "react";

const cards = [
  {
    id: 1,
    title: "What is insurance?",
    text: "Insurance is an arrangement between a client and insurance broker usually in the form of an insurance policy/contract. The policy usually agrees to provide the client with financial protection of selected assets in the event of unexpected loss or damage in exchange for a premium.",
    buttonTitle: "Explore",
    icon: faBriefcase,
  },
  {
    id: 2,
    title: "What is an Insurance Broker?",
    text: "An insurance broker is a registered adviser who acts on behalf of their client when dealing with an insurer. A client pays a premium to their insurance broker in return for an insurance broker to use their knowledge and experience to get the best outcome if a claim needs to be lodged.",
    buttonTitle: "Explore",
    icon: faUser,
  },
  {
    id: 3,
    title: "Why would I need insurance?",
    text: "There are many different reasons why you might need insurance. Having insurance on your assets gives you peace of mind that your valuables are covered. This means that you can focus on the things that are important in life without having to worry unnecessarily. There is insurance to cover home, business, liability, vehicle and many more.",
    buttonTitle: "Explore",
    icon: faQuestion,
  },
  {
    id: 5,
    title: "Why use an Insurance Broker?",
    text: "Using an Insurance Broker instead of doing it yourself has some distinct advantages. An Investment Broker is a registered professional that has experience and knowledge in the many different insurance fields. They are able to use their expertise in the insurance system to get the very best outcome in the unlikely case that you will need to settle a claim.",
    buttonTitle: "Enquire",
    icon: faEnvelopeOpen,
  },
  {
    id: 4,
    title: "Why choose Territory Insurance Brokers?",
    text: "Territory Insurance Brokers top priority is their clients. We work closely with you to select the best policy for your needs. Should it come to needing to place an insurance claim, we will use our extensive knowledge to secure the best outcome. We are Australian-owned and operated and are easily reachable from anywhere in Australia.",
    buttonTitle: "Enquire",
    icon: faEnvelopeOpen,
  },
  {
    id: 5,
    title: "What insurance policies will I need?",
    text: "There is no universal answer to this question. This is because everybody’s situation is different and needs to be discussed. Please get in touch with us and we will help you to choose the insurance policy that best suits you and your individual requirements.",
    buttonTitle: "Enquire",
    icon: faEnvelopeOpen,
  },
];

const Faq = () => {
  return (
    <div>
      <SEO title={"Territory Insurance Brokers - FAQ"}
           description={`Insurance can be confusing at the best of times, so we have listed a few frequently asked questions for your convenience.`}
           url={"https://territoryinsurancebrokers.com.au/faq"}/>
      <Banner image={banner} alt={"are you covered?"} />
      <Layout>
        <main>
          <div>
            <h1
              className={
                "text-2xl text-center xs:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-700 my-8 md:mt-16 xl:mt-24 "
              }
            >
              FAQ
            </h1>

            <div>
              <p
                className={
                  "text-sm xs:text-base xl:text-lg max-w-2xl xl:max-w-3xl mx-auto text-center"
                }
              >
                Insurance can be confusing at the best of times, so we have
                listed a few frequently asked questions for your convenience.
                These answers should help to give you a better understanding of
                our services.
                <br />
                <br /> If you have additional questions, please head over to our{" "}
                <Link href={"/contact-us"}>
                  <a className={"font-bold"}>contact us page</a>
                </Link>
                , and we will be in touch.
              </p>
            </div>
          </div>
          <div className={"mt-16 grid gap-8 lg:grid-cols-2 md:gap-16"}>
            {cards.map((item) => (
              <Question key={item.id.toString()} {...item} />
            ))}
          </div>
        </main>
        <section>
          <CallToAction
            link={"/testimonials"}
            image={call_to_action}
            color={"bg-gray-400"}
            title={"Read Our Client Reviews"}
            text={
              "We have helped thousands of clients over the years, feel free to have a look at what they have to say. If you would like to leave your own review please get in touch using the contact page."
            }
            buttonTitle={"Testimonials"}
            alt="mechanic"
          />
        </section>
      </Layout>
    </div>
  );
};

export default Faq;
