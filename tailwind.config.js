module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "SUIT Variable",
        head: "Cal Sans",
      },
      colors: {
        primary: "#d62828",
        "primary-light": "#152331",
      },
    },
  },
  plugins: [],
};
