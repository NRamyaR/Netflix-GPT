import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const isTrailerVideo = useSelector((store) => store.movie.isTrailerVideo);
  //Fetch trailer video && updating store with trailervideo data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/{movieId}/videos",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !isTrailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
