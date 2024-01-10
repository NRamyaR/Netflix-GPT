import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const showGptSearchView = useSelector(
    (store) => store?.gpt.showGptSearchView
  );
  return (
    <div>
      <Header />
      {showGptSearchView ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
      Main Container 
        -Vide Background
        -video Title
      Secondary Container 
        -Movie List * n
         -cards * n
         -
      */}
    </div>
  );
};

export default Browse;
