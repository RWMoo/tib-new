import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Info = ({ title, text, icon }) => {
  return (
    <div
      className={
        "text-center mx-6 md:mx-0 p-6 xs:p-8 xl:p-12 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg"
      }
    >
      <div
        className={
          "bg-yellow-500 h-12 w-12 xl:w-16 xl:h-16 rounded -mt-12 xs:-mt-14 xl:-mt-20 mx-auto flex justify-center items-center"
        }
      >
        <FontAwesomeIcon
          className={"text-lg xl:text-xl text-white"}
          icon={icon}
        />
      </div>
      <h3
        className={
          "text-xl xl:text-2xl font-bold mb-4 mt-4 xl:mt-8 xl:mb-5 text-gray-700"
        }
      >
        {title}
      </h3>
      <p className={"text-sm xs:text-base xl:text-lg"}>{text}</p>
    </div>
  );
};

export default Info;
