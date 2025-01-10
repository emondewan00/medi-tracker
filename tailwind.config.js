/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#007dfc",
        grayCS: "#C0C0C0",
        darkGray: "#8f8f8f",
        lightGrayBorder: "#E5E7EB",
        lightPrimary: "#d1e9ff",
        greenCS: "#32bf82",
      },
    },
  },
  plugins: [],
};
