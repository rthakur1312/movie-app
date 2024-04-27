import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import RemoveFavorite from './RemoveFavorite';

const FavoriteMovieCarousel = ({ favorites, removeFavoriteMovie }) => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        // Update slidesToShow based on the number of favorites
        if (favorites.length <= 2) {
            setSlidesToShow(favorites.length);
        } else {
            setSlidesToShow(3); // Maximum number of slides to show
        }
    }, [favorites]);

    const renderFavorites = () => {
        if (favorites.length === 1) {
            return (
                <div className='w-[80%] m-auto py-12'>
                    <div className='py-6'>
                        <h1 className='text-3xl font-bold font-serif text-center'>Your Favorites</h1>
                    </div>
                    <div className='flex justify-center'>
                        <div className="w-[300px]">
                            <img className='h-[400px] w-full object-cover' src={favorites[0].Poster} alt={favorites[0].Title} />
                            <div className='w-full text-center mt-2'>
                                <RemoveFavorite removeFavoriteMovie={() => removeFavoriteMovie(favorites[0])} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (favorites.length === 2) {
            return (
                <div className='w-[80%] m-auto py-12'>
                    <div className='py-6'>
                        <h1 className='text-3xl font-bold font-serif text-center'>Your Favorites</h1>
                    </div>
                    <div className='flex justify-center'>
                        {favorites.map(movie => (
                            <div key={movie.imdbID} className="w-[300px]">
                                <img className='h-[400px] w-full object-cover' src={movie.Poster} alt={movie.Title} />
                                <div className='w-full text-center mt-2'>
                                    <RemoveFavorite removeFavoriteMovie={() => removeFavoriteMovie(movie)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <div className='w-[80%] m-auto'>
                <div className='py-6'>
                    <h1 className='text-3xl font-bold font-serif text-center'>Your Favorites</h1>
                </div>
                {favorites.length > 0 && (
                    <Slider {...settings}>
                        {favorites.map(movie => (
                            <div key={movie.imdbID}>
                                <img className='h-[400px]' src={movie.Poster} alt={movie.Title} />
                                <div className='w-[65%] text-center mt-2'>
                                    <RemoveFavorite removeFavoriteMovie={() => removeFavoriteMovie(movie)} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
                {favorites.length === 0 && (
                    <p className='text-center text-lg'>You do not have any favorites yet.</p>
                )}
            </div>
            );
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return renderFavorites();
};

export default FavoriteMovieCarousel;
