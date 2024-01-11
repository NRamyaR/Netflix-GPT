import React from "react";
import { IMG_CDN_URL } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return <h1>Not poster present</h1>;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="MovieCard" />
    </div>
  );
};

export default MovieCard;
