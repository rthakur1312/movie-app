import {
  motion,
  useAnimation,
  useScroll,
  useInView,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Model from "./Model";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

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

const ScrollAnimations = () => {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "10%"]
  );

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });
  return (
    <div className="flex gap-10 overflow-hidden items-center w-[80%] m-auto pt-14 h-[600px] relative">
      <Model />

      {/* <motion.section 
            variants={gridSquareVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 p-10 gap-10">
                
                        <motion.div
                    variants = {{hidden: {opacity:0}, show: {opacity:1}}}
                 className=" bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10 w-[500px]">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-1/2 stroke-amber-500 stroke-[0.5]"    
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
            </motion.section> */}
      <section
        className="flex flex-col gap-10 mb-10 w-[60%] ml-auto"
        ref={containerRef}
      >
        {/* <motion.h1 className="text-5xl tracking-wide text-slate-100 text-center"
         animate={mainControls}
         initial="hidden"
         variants={{
            hidden: {opacity:0, y:75},
            visible: {
                opacity:1,
                y:0
            }
         }}
         transition={{delay:0.3}}
         >
          Lorem ipsum
        </motion.h1> */}
        <motion.p
          className="text-slate-100 font-thin text-xl w-[70%] mx-auto"
          style={{ translateX: paragraphTwoValue }}
        >
          "Explore this 3D model by rotating it! Click and drag on the model to
          see it from different angles."
        </motion.p>
      </section>
    </div>
  );
};

export default ScrollAnimations;
