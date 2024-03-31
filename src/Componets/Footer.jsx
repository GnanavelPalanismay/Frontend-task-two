import React, { Fragment } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <footer className="w-screen py-28 bg-black/75 text-white">
        <div className="container mx-auto ">
          <section className="flex flex-col gap-10 px-45 md:flex-row">
            <div className="flex-1 flex flex-col font-poppin gap-3">
              <h1 className="text-6xl font-semibold ">SMT</h1>
              <p className="text-1xl font">Chennai</p>
              <p className="text-1xl font">Los Angeles</p>

              <div className="flex gap-3">
                <FaFacebook />

                <BsInstagram />

                <FaLinkedin />
              </div>
            </div>
            <div className="flex-1 font-poppin text-5xl flex items-end border-b-2 justify-between">
              <h1 className="pb-3">Get In Touch</h1>
              <div className=" pb-5 ">
                <FaArrowRight size={25} />
              </div>
            </div>
          </section>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
