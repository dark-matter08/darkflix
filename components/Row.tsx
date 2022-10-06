import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useRef } from "react";
import { Movie } from "../typings";
import { Thumbnail } from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
  //   movie: Movie[] | DocumentData[];
}

export const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  return (
    <div className="space-y-0.5">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl ">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
        <div
          ref={rowRef}
          className="flex items-center space-x-1 overflow-x-scroll overflow-y-hidden md:space-x-2.5 scrollbar-hide"
        >
          {movies.map((movie) => {
            return <Thumbnail key={movie.id} movie={movie} />;
          })}
        </div>
        <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
};
