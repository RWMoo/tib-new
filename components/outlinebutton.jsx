import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

const OutlineButton = ({ title, icon, large, link }) => {
  return (
    <Link href={link}>
      <a>
        <button
          className={`${
            large && "md:text-lg"
          } flex items-center py-2 px-4 border bg-opacity-20 leading-relaxed border-gray-200 bg-white text-white rounded-lg`}
        >
          {title}
          <FontAwesomeIcon
            className={"ml-4 xs:text-xl text-white"}
            icon={icon}
          />
        </button>
      </a>
    </Link>
  );
};

export default OutlineButton;
