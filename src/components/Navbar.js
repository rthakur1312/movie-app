import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [scrollPositionTop, setScrollPositionTop] = useState(true);

    // const gridSquareVariants = {
    //     hidden: { opacity: 0 },
    //     show: {
    //       opacity: 1,
    //       transition: {
    //         staggerChildren: 0.25,
    //       },
    //     },
    //   };
      
      const svgIconVariants = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(252, 211, 77, 0)",
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(252, 211, 77, 1)",
        },
      };

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
                    <div className='flex'>
                        <motion.div
                    variants = {{hidden: {opacity:0}, show: {opacity:1}}} className="mr-6">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-[50px] stroke-amber-500 stroke-[0.5]"    
                    >
                          <motion.path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" 
                            variants={svgIconVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: {duration:2, ease: "easeInOut", delay:1, repeat:Infinity,repeatType:"reverse",repeatDelay:1},
                                fill: {duration: 2, ease: "easeIn", delay: 2, repeat:Infinity, repeatType:"reverse", repeatDelay:1  }
                            }}
                             />
                    </motion.svg>
                 </motion.div>
                    <motion.button 
                    whileTap={{scale:0.9}} 
                    whileHover={{scale:1.1, backgroundColor: '#d1d5db', color:'black'}}
                    transition={{bounceDamping:10, bounceStiffness: 600}}
                    className='bg-emerald-600 w-1/2 py-0.5 rounded-lg text-lg text-gray-100 tracking-wide w-[200px]'>
                        GITHUB
                    </motion.button>
                </div>
                
                </nav>
            </div>
    );
};

export default Navbar;
