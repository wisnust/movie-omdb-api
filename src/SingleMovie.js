import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import { motion } from "framer-motion";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`?i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Genre: genre,
  } = movie;
  const genreList = genre.split(", ");
  return (
    <motion.section className="single-movie bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
      <div className="relative">
        <img
          src={poster}
          className="absolute inset-0 object-cover w-full h-full blur-sm"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-80">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <motion.div
                className="w-full max-w-xl xl:px-12 xl:w-5/12"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <img
                  className="rounded shadow-2xl object-cover w-full h-46 rounded shadow-lg lg:rounded-none lg:shadow-none lg:h-full"
                  src={poster}
                  alt={title}
                />
              </motion.div>
              <motion.div
                className="w-full max-w-xl mt-12 xl:mt-0 xl:pr-16 xl:w-7/12"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h4 className="mt-4max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-200 sm:text-3xl sm:leading-none">{year}</h4>
                {genreList.map((item) => (
                  <p
                    className="inline-block px-4 py-1 mr-2 mb-4 text-xs font-semibold tracking-wider text-primary-900 uppercase rounded-full bg-white"
                    key={item}
                  >
                    {item}
                  </p>
                ))}
                <h2 className="mt-4max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  {title}
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  {plot}
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-teal-400"
                >
                  Back to Movies
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SingleMovie;
