import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle,} from "@fortawesome/free-solid-svg-icons";

const Question = ({ title, text }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-l-8 border-yellow-500 max-w-xl mx-auto md:p-8 rounded-sm shadow transition duration-500 hover:shadow-lg">
      <div className={"flex space-x-4 items-center"}>
        <FontAwesomeIcon
          className="text-2xl text-yellow-500"
          icon={faQuestionCircle}
        />
        <h2
          className={"text-sm xs:text-base lg:text-xl font-bold text-gray-800"}
        >
          {title}
        </h2>
      </div>
      <p
        className={"mt-4 lg:mt-6 text-gray-700 text-sm xs:text-base xl:text-lg"}
      >
        {text}
      </p>
    </div>
  );
};

export default Question;
