import React from "react";
import {useSelector} from "react-redux"
import UseMovieTrailer from "../hooks/UseMovieTrailer";


const VideoBackground = ({ movieId }) => { //pass movieId as a props from MainContainer
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
   UseMovieTrailer(movieId);
  return (
    <div>
      <iframe className="w-screen aspect-video"
        width=""
        height=""
        src={"https://www.youtube.com/embed/Cm3Z1jEjHHc?si=pG4MYskEHDvt3Dk2"+trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
