const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./src/**/*.vue"],
  important: true,
  prefix: "tw-",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        ".filter-none": {
          filter: "none",
        },
        ".filter-grayscale": {
          filter: "grayscale(100%)",
        },
        ".backdrop-filter-none": {
          filter: "none",
        },
        ".backdrop-filter-blur": {
          filter: "blur(20px)",
        },
      };
      addUtilities(newUtilities, ["hover"]);
    }),
  ],
};
