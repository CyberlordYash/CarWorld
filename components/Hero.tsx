"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find all the CARS details you need</h1>
        <p className="hero__subtitle">
          This website is all you need to find out best cars of the world.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        ></CustomButton>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
          ></Image>
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
