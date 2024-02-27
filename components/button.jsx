import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Button = ({ title, icon, large }) => {
  return (
    <button
      className={`${
        large && "xl:text-lg"
      } flex items-center py-2 px-4 border-2 border-gray-600 text-gray-700 rounded-lg font-bold`}
    >
      {title}
      <FontAwesomeIcon
        className={"ml-4 xs:text-xl text-yellow-600"}
        icon={icon}
      />
    </button>
  );
};

export default Button;
