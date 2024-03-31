import React, { Fragment } from "react";

export const ScrollBar = () => {
  return (
    <Fragment>
      <div class="w-full inline-flex flex-nowrap bg-black/75 text-white py-5">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-2xl">
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-2xl"
          aria-hidden="true"
        >
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
          <li>
            <p>Digital</p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
