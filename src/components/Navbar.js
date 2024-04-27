import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [scrollPositionTop, setScrollPositionTop] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const shouldBeTransparent = scrollPosition === 0;
        setScrollPositionTop(shouldBeTransparent);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
            <div className='sticky top-0 h-auto min-h-[70px] z-10 h-[68px];
            '>
                <nav className={`navbar ${scrollPositionTop ? 'transparent-navbar' : ''} py-4 px-8 flex justify-between bg-gray-800 transition duration-300 ease-in-out;`}>
                    <ul className='items-center bg-transparent flex flex-row justify-start list-none m-0;'>
                        <li>

                        <motion.div className="logo"
                        initial={{opacity:1, y:-100}}
                        animate={{opacity: 1, y:0}}
                        transition={{duration:1, ease:"easeOut", delay:0.4}}
                     
                    >    <h1 className='text-xl'>OMDb</h1></motion.div>
                        </li>
                        <li className='ml-4'>
                            <div className='home-link'>
                            <Link className='text-white flex items-center no-underline mx-4;' to="/">
                            <FontAwesomeIcon icon={faHouse} />
                                <p className='ml-4'>Home</p>
                                </Link>
                            </div>
                        </li>
                        <li className='ml-4'>
                            <div className='search-link'>
                            <Link className='text-white flex items-center no-underline mx-4;' to="/search">
                            <FontAwesomeIcon icon={faSearch} />
                                <p className='ml-2'>Search</p>
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <motion.div>
                    <motion.button 
                    whileTap={{scale:0.9}} 
                    whileHover={{scale:1.1, backgroundColor: '#d1d5db', color:'black'}}
                    transition={{bounceDamping:10, bounceStiffness: 600}}
                    className='bg-emerald-600 w-1/2 py-0.5 rounded-lg text-lg text-gray-100 tracking-wide w-[200px]'>
                        GITHUB
                    </motion.button>
                </motion.div>
                </nav>
            </div>
    );
};

export default Navbar;
