import Layout from "../components/layout";
import Banner from "../components/banner";


import banner from "../public/images/tib photos/shutterstock_1513622900.jpg";
import main_image from "../public/images/tib photos/shutterstock_1359717872.jpg";
import business_insurance from "../public/images/tib photos/shutterstock_1413515663.jpg";
import management_liability from "../public/images/tib photos/shutterstock_791606470.jpg";
import workers_compensation from "../public/images/tib photos/shutterstock_598190453.jpg";
import professional_indemnity from "../public/images/tib photos/shutterstock_622211642.jpg";
import hard_to_place_risks from "../public/images/tib photos/shutterstock_1388687684.jpg";
import commercial_motor from "../public/images/tib photos/shutterstock_1087255421.jpg";
import trade_insurance from "../public/images/tib photos/shutterstock_1935685159.jpg";
import public_liability from "../public/images/tib photos/shutterstock_72972283.jpg";
import heavy_motor_mobile_plant from "../public/images/tib photos/shutterstock_1301206006.jpg";
import building_construction from "../public/images/tib photos/shutterstock_633325685.jpg";
import farm_rural_packages from "../public/images/tib photos/shutterstock_1482686492.jpg";
import home_contents from "../public/images/tib photos/shutterstock_325745579.jpg";
import motor_vehicle from "../public/images/tib photos/shutterstock_636632101.jpg";

import Link from "next/link";
import Image from "next/image";
import FuzzySearch from "fuzzy-search";
import Search from "../components/search";
import Product from "../components/product";
import React, {useState} from "react";
import {motion} from "framer-motion";
import SEO from "../components/SEO";

const allProducts = [
  {
    id: 1,
    title: "Business Insurance",
    image: business_insurance,
    keywords: ["business", "corporate"],
    text: "This package can help you in challenging situations, including material loss or damage, business interruption, in the event of a burglary, and much more.",
    buttonTitle: "Enquire",
    alt: "people holding up tools"
  },
  {
    id: 2,
    title: "Management Liability",
    image: management_liability,
    keywords: ["business", "corporate"],
    text: "Management Liability is there to protect managers against claims of wrongful acts. This covers against claims of wrongful dismissals, harassment, discrimination, fraud, theft and more.",
    buttonTitle: "Enquire",
    alt: "risk management"
  },
  {
    id: 3,
    title: "Workers Compensation",
    image: workers_compensation,
    keywords: ["business", "corporate", "accident", "injury"],
    text: "Workers Compensation can be expensive, but with the right insurance, we can help. We can ensure claims are handled in your best interests and you are not paying more than you need to.",
    buttonTitle: "Enquire",
    alt: "woman working on a car"
  },
  {
    id: 4,
    title: "Professional Indemnity",
    image: professional_indemnity,
    keywords: ["business", "corporate"],
    text: "Professional Indemnity insurance protects businesses that offer advice and services to clients. It can cover allegations of negligence, breach of professional duty, incorrect advice and more.",
    buttonTitle: "Enquire",
    alt: "two workers looking up at a crane"
  },
  {
    id: 6,
    title: "Hard To Place Risks",
    image: hard_to_place_risks,
    keywords: ["business", "corporate"],
    text: "Hard to place risk insurance can be essential if your business is riskier than most. Businesses dealing with chemicals, wastes, product manufacturing and other higher-risk operations can stay protected.",
    buttonTitle: "Enquire",
    alt: "two helicopters in a field"
  },
  {
    id: 7,
    title: "Commercial Motor",
    image: commercial_motor,
    keywords: ["business", "corporate", "car", "vehicle"],
    text: "Commercial motor vehicle insurance can help cover the cost of damages to your business vehicle or any third parties involved in an accident. This can include fire, theft and damages.",
    buttonTitle: "Enquire",
    alt: "a line of trucks"
  },
  {
    id: 8,
    title: "Trade Insurance",
    image: trade_insurance,
    keywords: [
      "trade",
      "electrician",
      "plumber",
      "painters",
      "baker",
      "gasfitter",
      "brick layer",
      "carpenter",
      "roofing",
    ],
    text: "No matter what your trade - we can protect what you need to get the job done. We can cover you for property damage, public liability, stolen tools and more. Contact us for more information.",
    buttonTitle: "Enquire",
    alt: "a line up of tradespeople"
  },
  {
    id: 9,
    title: "Public Liability",
    image: public_liability,
    keywords: ["trade", "business", "rural"],
    text: "Public Liability insurance can protect your business in the event of an accident, even if you are not at fault. All size businesses can benefit from this coverage. Enquire today for more information.",
    buttonTitle: "Enquire",
    alt: "industrial worksite"
  },
  {
    id: 10,
    title: "Heavy Motor & Mobile Plant",
    image: heavy_motor_mobile_plant,
    keywords: ["truck", "vehicle", "worksite"],
    text: "Keep your mind at ease and your heavy vehicles on the road with this Heavy Vehicle & Mobile Plant coverage. From trucks to entire fleets, this coverage allows you to focus on your business.",
    buttonTitle: "Enquire",
    alt: "two heavy motor vehicles"
  },
  {
    id: 11,
    title: "Building & Construction",
    image: building_construction,
    keywords: ["trade", "industrial", "steel", "tradesman"],
    text: "Preserve your construction company with material damage and public liability insurance. This package can get your project back on track instead of stalling. Contact us today!",
    buttonTitle: "Enquire",
    alt: "construction worker on roof"
  },
  {
    id: 12,
    title: "Farm & Rural Packages",
    image: farm_rural_packages,
    keywords: ["farm", "rural", "package", "land"],
    text: "Your farm is your livelihood, and we want to help protect it. Ranging from machinery breakdown, theft and motor coverage, we can ensure you rest easy knowing you're being looked after.",
    buttonTitle: "Enquire",
    alt: "mango farm"
  },
  {
    id: 13,
    title: "Home & Contents",
    image: home_contents,
    keywords: ["family", "life", "house", "property"],
    text: "Keep a roof over your head by getting home and contents insurance. We can provide temporary accommodation and cover damaged property costs from burglary to fire damage.",
    buttonTitle: "Enquire",
    alt: "home and contents form"
  },
  {
    id: 14,
    title: "Motor Vehicle",
    image: motor_vehicle,
    keywords: ["car", "vehicle", "motorbike", "motorcycle", "truck"],
    text: "Having a working car is essential for getting to work or even taking your kids to soccer practice. We can offer rental cars and cost coverage to keep you on track with our motor vehicle insurance.",
    buttonTitle: "Enquire",
    alt: "line up of cars"
  },
];

const business = [
  {
    id: 1,
    title: "Business Insurance",
    image: business_insurance,
    keywords: ["business", "corporate"],
    text: "This package can help you in challenging situations, including material loss or damage, business interruption, in the event of a burglary, and much more.",
    buttonTitle: "Enquire",
    alt: "people holding up tools"
  },
  {
    id: 2,
    title: "Management Liability",
    image: management_liability,
    keywords: ["business", "corporate"],
    text: "Management Liability is there to protect managers against claims of wrongful acts. This covers against claims of wrongful dismissals, harassment, discrimination, fraud, theft and more.",
    buttonTitle: "Enquire",
    alt: "risk management"
  },
  {
    id: 3,
    title: "Workers Compensation",
    image: workers_compensation,
    keywords: ["business", "corporate", "accident", "injury"],
    text: "Workers Compensation can be expensive, but with the right insurance, we can help. We can ensure claims are handled in your best interests and you are not paying more than you need to.",
    buttonTitle: "Enquire",
    alt: "woman working on a car"
  },
  {
    id: 4,
    title: "Professional Indemnity",
    image: professional_indemnity,
    keywords: ["business", "corporate"],
    text: "Professional Indemnity insurance protects businesses that offer advice and services to clients. It can cover allegations of negligence, breach of professional duty, incorrect advice and more.",
    buttonTitle: "Enquire",
    alt: "two workers looking up at a crane"
  },
  {
    id: 6,
    title: "Hard To Place Risks",
    image: hard_to_place_risks,
    keywords: ["business", "corporate"],
    text: "Hard to place risk insurance can be essential if your business is riskier than most. Businesses dealing with chemicals, wastes, product manufacturing and other higher-risk operations can stay protected.",
    buttonTitle: "Enquire",
    alt: "two helicopters in a field"
  },
  {
    id: 7,
    title: "Commercial Motor",
    image: commercial_motor,
    keywords: ["business", "corporate", "car", "vehicle"],
    text: "Commercial motor vehicle insurance can help cover the cost of damages to your business vehicle or any third parties involved in an accident. This can include fire, theft and damages.",
    buttonTitle: "Enquire",
    alt: "a line of trucks"
  }
];

const trade = [
  {
    id: 8,
    title: "Trade Insurance",
    image: trade_insurance,
    keywords: [
      "trade",
      "electrician",
      "plumber",
      "painters",
      "baker",
      "gasfitter",
      "brick layer",
      "carpenter",
      "roofing",
    ],
    text: "No matter what your trade - we can protect what you need to get the job done. We can cover you for property damage, public liability, stolen tools and more. Contact us for more information.",
    buttonTitle: "Enquire",
    alt: "a line up of tradespeople"
  },
  {
    id: 9,
    title: "Public Liability",
    image: public_liability,
    keywords: ["trade", "business", "rural"],
    text: "Public Liability insurance can protect your business in the event of an accident, even if you are not at fault. All size businesses can benefit from this coverage. Enquire today for more information.",
    buttonTitle: "Enquire",
    alt: "industrial worksite"
  },
  {
    id: 10,
    title: "Heavy Motor & Mobile Plant",
    image: heavy_motor_mobile_plant,
    keywords: ["truck", "vehicle", "worksite"],
    text: "Keep your mind at ease and your heavy vehicles on the road with this Heavy Vehicle & Mobile Plant coverage. From trucks to entire fleets, this coverage allows you to focus on your business.",
    buttonTitle: "Enquire",
    alt: "two heavy motor vehicles"
  },
  {
    id: 11,
    title: "Building & Construction",
    image: building_construction,
    keywords: ["trade", "industrial", "steel", "tradesman"],
    text: "Preserve your construction company with material damage and public liability insurance. This package can get your project back on track instead of stalling. Contact us today!",
    buttonTitle: "Enquire",
    alt: "construction worker on roof"
  },
  {
    id: 12,
    title: "Farm & Rural Packages",
    image: farm_rural_packages,
    keywords: ["farm", "rural", "package", "land"],
    text: "Your farm is your livelihood, and we want to help protect it. Ranging from machinery breakdown, theft and motor coverage, we can ensure you rest easy knowing you're being looked after.",
    buttonTitle: "Enquire",
    alt: "mango farm"
  },
];

const residential = [
  {
    id: 13,
    title: "Home & Contents",
    image: home_contents,
    keywords: ["family", "life", "house", "property"],
    text: "Keep a roof over your head by getting home and contents insurance. We can provide temporary accommodation and cover damaged property costs from burglary to fire damage.",
    buttonTitle: "Enquire",
    alt: "home and contents form"
  },
  {
    id: 14,
    title: "Motor Vehicle",
    image: motor_vehicle,
    keywords: ["car", "vehicle", "motorbike", "motorcycle", "truck"],
    text: "Having a working car is essential for getting to work or even taking your kids to soccer practice. We can offer rental cars and cost coverage to keep you on track with our motor vehicle insurance.",
    buttonTitle: "Enquire",
    alt: "line up of cars"
  },
];

const variants = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const InsuranceProducts = () => {
  const [search, setSearch] = useState("");
  const searcher = new FuzzySearch(allProducts, ["title", "keywords"], {
    caseSensitive: false,
    sort: true,
  });
  return (
    <div>
      <SEO title={"Territory Insurance Brokers - Insurance Products"}
           description={`We have a wide selection of insurance policies to fit all circumstances, whether in business, a trade, or your home life. We can provide you coverage and keep your mind at ease.`}
           url={"https://territoryinsurancebrokers.com.au/insurance-products"}/>
      <Banner image={banner} alt={"road train"} />
      <Layout>
        <main>
          <div>
            <h1
              className={
                "text-2xl xs:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-700 my-8 md:my-16 xl:my-24 xl:mb-20"
              }
            >
              Insurance Products
            </h1>
            <div
              className={
                "grid grid-cols-1 md:grid-cols-2 md:gap-16 flex justify-center items-center"
              }
            >
              <div>
                <p className={"text-sm xs:text-base  xl:text-lg"}>
                  We have a wide selection of insurance policies to fit all
                  circumstances, whether in business, a trade, or your home
                  life. We can provide you coverage and keep your mind at ease.{" "}
                  <br />
                  <br />
                  Our products range from management liability and workers
                  compensation, to various trades, motor vehicle insurance and
                  much more. <br />
                  <br />
                  If a product that you require is not listed, please{" "}
                  <Link href={"/contact-us"}>
                    <a className={"font-bold"}> contact us</a>
                  </Link>
                  , and we will be happy to assist you.
                </p>
              </div>
              <div className={"mt-8 shadow-lg relative h-56 md:my-0 md:h-72"}>
                <Image
                  placeholder={"blur"}
                  blurDataURL={main_image}
                  src={main_image}
                  alt={"horse rider with cattle on a ranch"}
                  objectFit={"cover"}
                  layout="fill"
                  objectPosition={"center"}
                  className={"rounded"}
                />
              </div>
            </div>
          </div>
          <div
            className={
              "grid md:grid-cols-2 flex items-center mb-4 md:mb-0 mt-6"
            }
          >
            <div>
              {search !== "" && (
                <span
                  className={`text-lg md:text-2xl xl:text-3xl font-semibold`}
                >
                  Search results
                </span>
              )}
            </div>
            <Search search={search} setSearch={setSearch} />
          </div>
          {search === "" ? (
            <NoSearchProducts />
          ) : (
            <div
              className={`grid ${
                searcher.search(search).length !== 0 &&
                "md:grid-cols-2 2xl:grid-cols-3"
              } gap-8 mt-4 md:mt-8 xl:mt-12`}
            >
              {searcher.search(search).length === 0 ? (
                <NoResults />
              ) : (
                searcher.search(search).map((item) => (
                  <motion.div
                    key={item.id}
                    transition={{ type: "spring", damping: 20 }}
                    layout
                    variants={variants}
                    initial={"exit"}
                    animate={"enter"}
                    exit={"exit"}
                  >
                    <Product {...item} />
                  </motion.div>
                ))
              )}
            </div>
          )}
        </main>
      </Layout>
    </div>
  );
};

const NoSearchProducts = () => {
  return (
    <>
      <div>
        <h2
          id={"business"}
          className={"text-xl md:text-2xl xl:text-3xl font-semibold"}
        >
          Business & Corporate
        </h2>
        <p className={"text-sm xs:text-base xl:text-lg mt-8"}>
          We provide a range of business and corporate insurance packages to
          suit your needs. These products include business insurance, management
          liability, workers compensation, professional indemnity, hard to place
          risks, commercial motor, and more.
          <br />
          <br />
          If you require a business and corporate insurance package that is not
          listed, please{" "}
          <Link href={"/contact-us"}>
            <a className={"font-bold"}>contact us</a>
          </Link>
          , and we will look after your needs.
        </p>
        <div
          className={"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 xl:mt-12"}
        >
          {business.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className={"mt-8 lg:mt-24"}>
        <h2
          id={"trade"}
          className={"text-xl md:text-2xl xl:text-3xl font-semibold"}
        >
          Trade & Rural
        </h2>
        <p className={"text-sm xs:text-base  xl:text-lg mt-8"}>
          We provide a range of trade and rural insurance packages to suit your
          needs. These products include trade insurance, public liability, heavy
          motor and mobile plant, building and construction, farm and rural, and
          more.
          <br />
          <br />
          If you require a trade and rural insurance package that is not listed,
          please{" "}
          <Link href={"/contact-us"}>
            <a className={"font-bold"}>contact us</a>
          </Link>
          , and we will look after your needs.
        </p>
        <div
          className={"grid md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-8 xl:mt-12"}
        >
          {trade.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className={"mt-8 lg:mt-24"}>
        <h2
          id={"residential"}
          className={"text-xl md:text-2xl xl:text-3xl font-semibold"}
        >
          Residential
        </h2>
        <p className={"text-sm xs:text-base xl:text-lg mt-8"}>
          We provide a range of different residential insurance packages to suit
          your needs. These insurance products include home and contents
          coverage, motor vehicle insurance and more.
          <br />
          <br />
          If you require a residential insurance package that is not listed,
          please{" "}
          <Link href={"/contact-us"}>
            <a className={"font-bold"}>contact us</a>
          </Link>
          , and we will look after your needs.
        </p>
        <div
          className={"grid md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-8 xl:mt-12"}
        >
          {residential.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

const NoResults = () => {
  return (
    <div className={"mx-auto max-w-xl flex justify-center"}>
      <div className={"my-4 xl:my-16 w-full text-center"}>
        <p className={"text-lg xl:text-2xl font-semibold"}>No Products Found</p>
        <p className={"px-8 mt-4 xl:text-lg"}>
          We cannot find your product on our search results. Please contact us
          directly and we can still find the right coverage for you.
        </p>
      </div>
    </div>
  );
};

export default InsuranceProducts;
