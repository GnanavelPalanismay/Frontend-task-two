import React, { Fragment } from "react";

const Platform = () => {
  return (
    <Fragment>
      <section className="w-screen h-screen bg-gray-200/50 p-10">
        <div className="container mx-auto flex h-full">
          <div className="flex-1 w-full h-full flex flex-col font-Roboto gap-9 pl-10 justify-center">
            <h4 className="text-2xl font-poppin pt-10">OUR SERVICE</h4>

            <h1 className="text-7xl font-bold">Web And Mobile Platform</h1>

            <p className="text-gray-500 w-[450px] font-poppin">
              Norem insum Dolor Sit Amet, consectetur Adipiscing Elit. Etiam Eu
              Turpis Molestie, Dictum Est A, Mattis Tellus. Sed Dignissim, Metus
              Nec.
            </p>
          </div>

          <div className="flex-1 h-full">
            <img
              class="w-full h-full object-cover p-14"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Platform;
