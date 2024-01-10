import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import CDN_LINK from "../utils/Constant";
const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute z-10">
        <img src={CDN_LINK} alt="netflix-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearchPage;
