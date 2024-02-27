import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Search = ({ search, setSearch }) => {
  return (
    <div className={"flex justify-end "}>
        <div className={"flex w-full sm:w-1/2 md:w-3/4 my-4 md:my-8 p-3 xl:px-5 justify-end items-center border-2 border-gray-700 xl:text-lg placeholder-gray-600 rounded-lg"}>
            <FontAwesomeIcon className={"text-yellow-500 mr-4"} icon={faSearch}/>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={"Search Products"}
                className={
                    " w-full outline-none"
                }
            />
        </div>
    </div>
  );
};

export default Search;
