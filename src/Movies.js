import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {movies?.map((movie) => {
            const {
              imdbID: id,
              Poster: poster,
              Title: title,
              Year: year,
            } = movie;

            return (
              <Link to={`/movies/${id}`} key={id} className="movie">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-80 xl:h-80"
                      src={poster === "N/A" ? url : poster}
                      alt={title}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-1 text-lg font-bold text-gray-100">
                        {title}
                      </p>
                      <p className="mb-4 text-xs tracking-wide text-gray-400">
                        {year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Movies;
