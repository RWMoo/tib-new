import React from "react";
import Image from "next/image";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import OutlineButton from "./outlinebutton";

const CallToAction = ({ title, text, image, color, link, buttonTitle, alt }) => {
  return (
    <div className="mx-auto  mt-16 xl:mt-32 md:mt-16">
      <div className="relative max-w-7xl mx-auto">
        <div
          className={`relative py-8 lg:py-16 px-16 rounded-xl overflow-hidden lg:px-24 ${color}`}
        >
          <div className="absolute inset-0 opacity-80 filter  mix-blend-multiply">
            <div className={"relative h-full"}>
              <Image
                src={image}
                alt={alt}
                placeholder={"blur"}
                objectFit={"cover"}
                layout="fill"
                priority={true}
                objectPosition={"center"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative">
            <h3 className="text-3xl lg:text-4xl mt-8 text-center font-medium mx-auto text-white">
              {title}
            </h3>
            <blockquote className="mt-12  text-white text-center">
              <p className="text-base lg:text-lg">{text}</p>
            </blockquote>
            <div className={"flex justify-center mt-14  mb-8 xl:mt-12"}>
              <OutlineButton
                link={link}
                large
                title={buttonTitle}
                icon={faChevronRight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
