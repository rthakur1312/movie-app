import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Hero component for displaying hero content
export const Hero = () => {
  return (
    <div>
      {/* Render TextParallaxContent with hero content */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="More to Watch"
        heading="Pick the best."
      >
      </TextParallaxContent>
    </div>
  );
};

// Constants
const IMG_PADDING = 12;

// TextParallaxContent component for parallax effect with text overlay
const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        {/* Render StickyImage with sticky background image */}
        <StickyImage imgUrl={imgUrl} />
        {/* Render OverlayCopy with text overlay */}
        <OverlayCopy subheading={subheading} heading={heading} />
      </div>
      {children}
    </div>
  );
};

// StickyImage component for the sticky background image with scroll effects
const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  // Apply scale and opacity based on scroll position
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-neutral-950/70"
      ></motion.div>
    </motion.div>
  );
};

// OverlayCopy component for the text overlay with scroll effects
const OverlayCopy = ({ heading, subheading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Apply translation and opacity based on scroll position
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      ref={targetRef}
      style={{ y, opacity }}
    >
      {/* Render heading and subheading */}
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {heading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">
        {subheading}
      </p>
    </motion.div>
  );
};
