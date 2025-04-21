/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#ec4899",
        background: "#f9fafb",
      },
      fontFamily: {
        mono: "SpaceMono",
        gilroy: "GilroyRegular",
        'gilroy-light': "GilroyLight",
        'gilroy-bold': "GilroyBold",

        // system: platformSelect({
        //   ios: "Georgia",
        //   android: "sans-serif",
        //   default: "ui-sans-serif",
        // }),
      },

    },
  },
  plugins: [],
}
