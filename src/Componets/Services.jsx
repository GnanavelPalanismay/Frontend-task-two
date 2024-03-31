import React, { Fragment } from "react";

export const Services = () => {
  return (
    <Fragment>
      <Fragment>
        <section className="h-screen w-screen bg-gray-200/50 ">
          <div className="container mx-auto w-full h-full ">
            <div className="grid grid-cols-2 grid-rows-2  gap-6 w-full h-full">
              <div className="w-full h-full flex flex-col font-Roboto gap-6">
                <h4 className="text-3xl font-poppin pt-10">OUR SERVICE</h4>

                <h1 className="text-5xl font-bold">
                  Influencer marketing <br /> Stratergy
                </h1>

                <p className="hidden lg:block text-gray-500 w-[450px]">
                  Norem insum Dolor Sit Amet, consectetur Adipiscing Elit. Etiam
                  Eu Turpis Molestie, Dictum Est A, Mattis Tellus. Sed
                  Dignissim, Metus Nec.
                </p>
              </div>
              <div className="w-full h-full">
                <img
                  class="w-full h-full object-cover rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full">
                <img
                  class="w-full h-full object-cover rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex flex-col font-Roboto gap-6">
                <h4 className="text-3xl font-poppin pt-10">OUR SERVICE</h4>

                <h1 className="text-5xl font-bold">AI Powered</h1>

                <p className="text-gray-500 w-[450px] hidden lg:block">
                  Norem insum Dolor Sit Amet, consectetur Adipiscing Elit. Etiam
                  Eu Turpis Molestie, Dictum Est A, Mattis Tellus. Sed
                  Dignissim, Metus Nec.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Fragment>
  );
};
