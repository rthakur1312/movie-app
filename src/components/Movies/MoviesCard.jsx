import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion'
import Favorites from '../Favorites/AddFavorites';
import RemoveFavorite from '../Favorites/RemoveFavorite';

const MoviesCard = ({movie, handleFavoritesList, removeFavoriteMovie, favorites, defaultImage}) => {

    //check if movie is already in the favorites list
    const isFavorite = favorites.some(item => item.imdbID === movie.imdbID);

    return (
            <li className='bg-gray-700 rounded-lg overflow-hidden text-center shadow-md list-none'>
                <article>
                    <div className='image-container relative transition-transform duration-500 overflow-hidden'>
                    <img className='w-full h-80 object-cover mb-2' 
                        src = {movie.Poster !== "N/A" ? movie.Poster : defaultImage} 
                        alt = {movie.Title}  />
                    </div>
                    <div>
                        <h3 className='font-seriff font-bold'>{movie.Title}</h3>
                        <p className='font-seriff'>{movie.Year}</p>
                    </div>      
                    <div className=''>
                    {isFavorite ? (
                        <RemoveFavorite removeFavoriteMovie={removeFavoriteMovie} movie={movie} />
                    ) : (
                        <Favorites movie={movie} handleFavoritesList={handleFavoritesList} />
                    )}
                    </div>
                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="w-40 mx-auto p-2 rounded-lg bg-gray-500 my-4">
                        See Details
                        </motion.button>
                </article>
            </li>
    );
};

export default MoviesCard;
