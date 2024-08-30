/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src**/*.{js,ts,jsx,html}"],
  theme: {
    extend: {},
  },
  // this will bring in forms from tailwind
  plugins: [require("@tailwindcss/forms")],
};

//
