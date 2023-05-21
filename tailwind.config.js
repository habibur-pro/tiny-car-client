/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {

        // #f9d92e
      }
    },


  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "light": {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: '#f9d92e',

          secondary: "#809bfe",
        }
      }

    ],
  },
}

