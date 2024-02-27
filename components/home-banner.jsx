import React from "react";
import Image from "next/image";
import tib_logo from "../public/images/tib-logo.svg";
//https://cdn.pixabay.com/photo/2018/03/15/08/54/grid-3227459_960_720.jpg
const HomeBanner = () => {
  return (
    <div className="w-full relative -z-20 bg-gradient-to-b from-gray-100 h-56 xl:h-80 2xl:h-96 to-gray-300 shadow-xl mb-12 md:mb-16 xl:mb-24 xl:mb-20 flex items-center">
      <div className={"relative xl:w-128 w-96 px-8 2xl:px-0 py-6 mx-auto mt-2"}>
        <Image src={tib_logo} alt={"Territory Insurance Brokers"} layout={"responsive"} />
      </div>
    </div>
  );
};

export default HomeBanner;
