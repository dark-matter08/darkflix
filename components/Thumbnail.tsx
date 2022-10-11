import Image from "next/image";
import React from "react";
import { baseUrl } from "../constants/movie";
import ImageLoader from "../image_loader";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
  //   movie: Movie | DocumentData;
}

export const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer rounded-sm duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 ">
      <Image
        alt="bannerImage"
        loader={ImageLoader}
        unoptimized
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        layout="fill"
        className="rounded-md object-cover"
      />
    </div>
  );
};
