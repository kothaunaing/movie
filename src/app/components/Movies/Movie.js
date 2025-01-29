import React from "react";

// Sample movie data
const movies = [
  {
    id: 1,
    title: "Movie 1",
    image: "https://via.placeholder.com/200x300",
    description: "This is the description for Movie 1.",
  },
  {
    id: 2,
    title: "Movie 2",
    image: "https://via.placeholder.com/200x300",
    description: "This is the description for Movie 2.",
  },
  {
    id: 3,
    title: "Movie 3",
    image: "https://via.placeholder.com/200x300",
    description: "This is the description for Movie 3.",
  },
  {
    id: 4,
    title: "Movie 4",
    image: "https://via.placeholder.com/200x300",
    description: "This is the description for Movie 4.",
  },
  {
    id: 5,
    title: "Movie 5",
    image: "https://via.placeholder.com/200x300",
    description: "This is the description for Movie 5.",
  },
];

const HorizontalMovieScroll = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
      {/* Horizontal scrolling container */}
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-48 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-600">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalMovieScroll;
