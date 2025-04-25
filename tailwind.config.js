import gluestackPlugin from '@gluestack-ui/nativewind-utils/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.{tsx,jsx,ts,js}", "components/**/*.{tsx,jsx,ts,js}"],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: "#fd0;",
        // secondary: "#ec4899",
        // background: "#f9fafb",
      },
      mono: "SpaceMono",
      gilroy: "GilroyRegular",
      'gilroy-light': "GilroyLight",
      'gilroy-bold': "GilroyBold",


    },
    fontFamily: {
      mono: "SpaceMono",
      gilroy: "GilroyRegular",
      'gilroy-light': "GilroyLight",
      'gilroy-bold': "GilroyBold"
    },
    boxShadow: {
      'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
      'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
      'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
      'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
      'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
      'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
      'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
      'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
      'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
    },

  },
  plugins: [],
};
