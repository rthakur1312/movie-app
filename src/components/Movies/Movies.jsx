import React, { useState, useEffect } from "react";
import FavoriteMovieCarousel from "../Favorites/FavoriteMovieCarousel";
import MoviesCard from "./MoviesCard";
import SearchInput from "./SearchInput";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  // setting default image src is not available
  const defaultImage = 'https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  const getMovies = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ab7ce875`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      setMovies([]);
    }
  };


  useEffect(() => {
    if (searchValue) {
      getMovies(searchValue);
    } else {
      setMovies([]);
    }
  }, [searchValue]);

  useEffect(() => {
    // Load favorites from local storage when component mounts
    const savedFavorites = JSON.parse(
      localStorage.getItem("movie-app-favorites")
    );
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app-favorites", JSON.stringify(items));
  };

  //function to add Favorite movies
  const addFavoriteMovie = (movie) => {
    // Check if the movie is already in favorites
    const isAlreadyFavorite = favorites.some(
      (item) => item.imdbID === movie.imdbID
    );
    if (!isAlreadyFavorite) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    } else {
      console.log("Movie is already in favorites");
    }
  };

  //function to Remove Favorite movies
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* Check if search value is available and its length is greater than 2 characters */}
      {searchValue &&
  (searchValue.length > 2 ? (
    <div className="w-full md:w-[80%] m-auto">
      <h1 className="text-3xl font-bold font-serif ml-16 text-center">
        Search Results for :{" "}
        <span className="text-red-600">{searchValue}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 w-full md:max-w-[70rem]]">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MoviesCard
              handleFavoritesList={addFavoriteMovie}
              removeFavoriteMovie={removeFavoriteMovie}
              key={movie.imdbID}
              movie={movie}
              favorites={favorites}
              defaultImage={defaultImage}
            />
          ))
        ) : (
          <p className="text-center text-lg">No movies found</p>
        )}
      </div>
    </div>
  ) : (
    <p className="text-center text-lg">
      Please add more than 2 characters to search for a movie
    </p>
  ))}
  {/* Favorite movies section */}
      <FavoriteMovieCarousel
        favorites={favorites}
        removeFavoriteMovie={removeFavoriteMovie}
        defaultImage={defaultImage}
      />
    </div>
  );
};

export default Movies;
