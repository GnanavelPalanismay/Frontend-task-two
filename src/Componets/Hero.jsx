import React, { Fragment } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="bg-gray-200 w-screen h-screen relative ">
        {/* img */}
        <div className=" bg-red-800 absolute top-0 left-0 right-0 bottom-0 z-[1] sm:bg-fuchsia-500 md:bg-orange-600 lg:bg-lime-600 lg:top-[20vh] lg:bottom-0 lg:right-[55vw] rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full rounded-sm"
          />
        </div>

        {/* Text */}
        <div
          className="font-poppin font-semibold z-[3] absolute text-6xl leading-loose text-black/90  top-[20%] 
         lg:top-[20%] lg:left-[12%] lg:text-8xl lg:leading-[10rem] text-right   sm:text-7xl sm:leading-relaxed sm:top-[20%] sm:left-8%]  md:text-8xl md:leading-relaxed"
        >
          <span className="">
            The World's <br /> Best <br /> Brand Builders
          </span>
        </div>

        {/* Text */}

        <div>
          <span className="font-poppin absolute lg:right-[10%] lg:bottom-[10%] leading-loose text-gray-500 ">
            only AI Powered Brand <br /> Builders, Social Media And <br />
            Digital Barketers
          </span>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
