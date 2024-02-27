import Button from "./button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Card = ({ title, text, buttonTitle, icon, link }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-l-8 border-yellow-500 rounded-sm shadow transition duration-500 hover:shadow-lg">
      <div className={"flex space-x-4 items-center"}>
        <FontAwesomeIcon
          className="text-lg xl:mb-1 xl:text-2xl text-yellow-500"
          icon={icon}
        />
        <h3
          className={"text-lg xs:text-xl xl:text-2xl font-bold text-gray-700"}
        >
          {title}
        </h3>
      </div>
      <div>
        <p
          className={
            "mt-4 mb-5 text-gray-700 text-sm xs:text-base xl:text-lg flex-grow"
          }
        >
          {text}
        </p>
        <Link href={link}>
          <a>
            <Button title={buttonTitle} large icon={faChevronRight} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
