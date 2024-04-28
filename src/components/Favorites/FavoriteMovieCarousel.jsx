import React from "react";
import Slider from "react-slick"; // Assuming Slider is from a library like react-slick
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import RemoveFavorite from "./RemoveFavorite";

const FavoriteMovieCarousel = ({ favorites, removeFavoriteMovie, defaultImage }) => {
  // Slider settings for responsive carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[80%] m-auto">
      <div className="py-6">
        <h1 className="text-3xl font-bold font-serif text-center">
          Your Favorites
        </h1>
      </div>
      {favorites.length <= 2 && (
        <div className="flex justify-center py-6">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="w-[300px] mr-6">
              <img
                className="h-[400px] w-full object-cover"
                src={movie.Poster !== "N/A" ? movie.Poster : defaultImage}
                alt={movie.Title}
              />
              <div className="w-full text-center mt-2">
                {/* Remove favorite button */}
                <RemoveFavorite
                  removeFavoriteMovie={() => removeFavoriteMovie(movie)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {favorites.length > 2 && (
        <Slider {...settings}>
          {favorites.map((movie) => (
            <div key={movie.imdbID}>
              <img
                className="h-[400px]"
                src={movie.Poster !== "N/A" ? movie.Poster : defaultImage}
                alt={movie.Title}
              />
              <div className="w-[65%] text-center mt-2">
                {/* Remove favorite button */}
                <RemoveFavorite
                  removeFavoriteMovie={() => removeFavoriteMovie(movie)}
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
      {favorites.length === 0 && (
        <p className="text-center text-lg">
          You do not have any favorites yet.
        </p>
      )}
    </div>
  );
};

export default FavoriteMovieCarousel;
