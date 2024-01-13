import { CDN_LINK } from "../../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={CDN_LINK} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
