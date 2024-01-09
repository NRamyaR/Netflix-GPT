import React from "react";
import { useSelector } from "react-redux";
import VideBackground from "./VideBackground";
import Videotitle from "./Videotitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //   if (movies === null) return; both are same
  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <VideBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
