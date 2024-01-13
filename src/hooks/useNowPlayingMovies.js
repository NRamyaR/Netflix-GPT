import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import addNowPlayingMovies from "../utils/Store/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const isNowPlayingMovies = useSelector(
    (store) => store.movies.isNowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !isNowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
