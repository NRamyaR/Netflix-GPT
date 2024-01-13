import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import addPopularMovies from "../utils/Store/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const isPopularMovies = useSelector((store) => store.movies.isPopularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !isPopularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
