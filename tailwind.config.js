/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
    fontFamily: {
      poppin: ["Poppins"],
      Noto_Sans: ["Noto Sans", "sans - serif"],
      Roboto: ["Roboto", "sans - serif"]
    }
  },
  plugins: [],

});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'infinite-scroll': 'infinite-scroll 25s linear infinite',
//       },
//       keyframes: {
//         'infinite-scroll': {
//           from: { transform: 'translateX(0)' },
//           to: { transform: 'translateX(-100%)' },
//         }
//       }
//     },
//     fontFamily: {
//       poppin: ["Poppins"],
//       Noto_Sans: ["Noto Sans", "sans - serif"],
//       Roboto: ["Roboto", "sans - serif"]
//     }
//   },
//   plugins: [],
// };