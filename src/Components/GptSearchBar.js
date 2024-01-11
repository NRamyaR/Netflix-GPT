import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/Constant";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const searchTextValue = searchText.current.value;
    //Make an apu call to GPT API to get movie resul

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchTextValue +
      ". only give me names of 5 movies, comma separated like the example result given ahead.Example Result: Gadar, Sholay, Don, KGF, ";
    const getResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!getResult.choices) {
      //TOD:write Error handling
    }
    console.log(getResult.choices?.[0].message?.content);

    const getMovies = getResult.choices?.[0].message?.content.split(",");
    //["KGF","DOn","Lovemocktain", "bahubali", ]
    //for each movie I will search tmdb API
    const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie));
    //[promise, promsise,promise,promise,promise]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: getMovies, movieResults: tmdbResults })
    );
  };

  //searcg movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4  border-black col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
