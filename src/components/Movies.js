import React, { useState, useEffect } from 'react';
import FavoriteMovieCarousel from './FavoriteMovieCarousel';
import MoviesCard from './MoviesCard';
import SearchInput from './SearchInput';


const Movies = () => {

    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([]);

    const getMovies = async (searchValue) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ab7ce875`;
        const response = await fetch(url);
        const responseJson = await response.json()
        // console.log(responseJson)
        if (responseJson.Search) {
                setMovies(responseJson.Search);
            }
            else {
                setMovies([])
            }
      }
    
      useEffect(() => {
        if(searchValue) {
        getMovies(searchValue);
        }
        else {
            setMovies([])
        }
      }, [searchValue])

      useEffect(() => {
        // Load favorites from local storage when component mounts
        const savedFavorites = JSON.parse(localStorage.getItem('movie-app-favorites'));
        if (savedFavorites) {
            setFavorites(savedFavorites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('movie-app-favorites', JSON.stringify(items));
    }

    //   const saveToLocalStorage = (items) => {
    //     try {
    //       localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
    //     } catch (error) {
    //       console.error('Error saving to local storage:', error);
    //     }
    //   };

    // useEffect(() => {
    //     const fetchMovie = async()=>{
    //         const URL = "http://www.omdbapi.com/?s=captain&apikey=97f17f52"
    //         const response = await fetch(URL);
    //         const finalData = await response.json()
    //         console.log(finalData.Search)
    //         setMovies(finalData.Search)
    //     }
    //     fetchMovie();
    // }, []);

    //function to add Fvaorite movies
    const addFavoriteMovie = (movie) => {
       // Check if the movie is already in favorites
    const isAlreadyFavorite = favorites.some(item => item.imdbID === movie.imdbID);
    if (!isAlreadyFavorite) {
        const newFavoriteList = [...favorites, movie];
        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    } else {
        // Movie is already in favorites, handle accordingly
        console.log('Movie is already in favorites');
    }
    }
    //function to add Remove movies
    const removeFavoriteMovie = (movie) => {
        const newFavoriteList = favorites.filter(item => item.imdbID !== movie.imdbID)
        setFavorites(newFavoriteList)
        saveToLocalStorage(newFavoriteList);
    }



    return (
        <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
        {searchValue && searchValue.length > 2 && ( // Added && after the condition
            <div className='w-full md:w-[80%] m-auto'>
                <h1 className='text-3xl font-bold font-serif ml-16 text-center'>Search Results for : <span className='text-red-600'>{searchValue}</span></h1>
                <div id="movies">
                    {movies.length > 0 ? (
                        movies.map(movie => (
                            <MoviesCard
                                handleFavoritesList={addFavoriteMovie}
                                removeFavoriteMovie={removeFavoriteMovie}
                                key={movie.imdbID}
                                movie={movie}
                                poster={movie.Poster}
                                title={movie.Title}
                                year={movie.Year}
                                favorites={favorites}
                            />
                        ))
                    ) : (
                        <p className='text-center text-lg'>No movies found</p>
                    )}
                </div>
            </div>
        )}
        {searchValue && searchValue.length <= 2 && (
        <p className='text-center text-lg'>Please add more than 2 characters to search for a movie</p>
    )}
        <FavoriteMovieCarousel favorites={favorites} removeFavoriteMovie={removeFavoriteMovie} />
        </div>
    );
};

export default Movies;
