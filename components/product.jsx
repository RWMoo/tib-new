import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

const Product = ({ title, text, buttonTitle, image, alt }) => {
  return (
    <div
      className={
        "bg-gradient-to-br from-gray-50 to-gray-100 transition duration-500 shadow-lg rounded overflow-hidden mx-auto grid sm:grid-cols-2 md:grid-cols-1"
      }
    >
      <div className={"h-48 sm:h-full md:h-56 relative overflow-hidden"}>
        <Image
          placeholder={"blur"}
          src={image}
          alt={alt}
          objectFit={"cover"}
          layout="fill"
          objectPosition={"center"}
        />
      </div>
      <div className={"p-6 border-yellow-500 flex flex-col items-start"}>
        <h3 className={"text-base sm:text-lg font-bold mb-4 text-gray-700"}>
          {title}
        </h3>
        <p className={"text-sm md:text-base xs:text-base mb-6"}>{text}</p>
        <Link
          href={{
            pathname: "/get-a-quote",
            query: {
              id: title,
            },
          }}
        >
          <a>
            <Button title={buttonTitle} icon={faChevronRight} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
