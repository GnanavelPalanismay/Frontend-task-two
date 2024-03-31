import React, { Fragment } from "react";

export const CompanyStatus = () => {
  return (
    <Fragment>
      <section className="w-screen h-screen  sm:container sm:mx-auto p-10 ">
        <div className="grid  grid-cols-4 grid-rows-4 gap-6 w-full h-full">
          <div className="col-span-4 row-span-4 lg:col-span-2 lg:row-span-4 rounded-md">
            <img
              className="w-full h-full rounded-md"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>

          <section className="hidden lg:block col-span-2 row-span-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full h-full ">
              <div className="bg-black/75 text-white font-Roboto flex items-center justify-center flex-col gap-3 rounded-sm">
                <h1 className="text-7xl">100+</h1>
                <p className="text-2xl">Clients</p>
              </div>
              <div className="bg-black/75 text-white font-Roboto flex items-center justify-center flex-col gap-3 rounded-sm">
                <h1 className="text-7xl">10+</h1>
                <p className="text-2xl">Experience</p>
              </div>
              <div className="bg-black/75 text-white font-Roboto flex items-center justify-center flex-col gap-3 rounded-sm">
                <h1 className="text-7xl">150+</h1>
                <p className="text-2xl">Projects</p>
              </div>
              <div className="bg-black/75 text-white font-Roboto flex items-center justify-center flex-col gap-3 rounded-sm">
                <h1 className="text-7xl">50+</h1>
                <p className="text-2xl">Employees</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};
