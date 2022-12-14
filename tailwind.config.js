module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      h1: "36px",
      h2: "32px",
      h3: "24px",
      h4: "20px",
      h5: "16px",
      h6: "14px",
      caption: "12px",
    },
    screens: {
      mobile: "320px",
      tablet: "786px",
      laptop: "1024px",
    },
    fontFamily: {
      clash: ["Clash Display", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#4e4d93",
        dark_primary: "#2a254b",
        light_grey: "#f9f9f9",
        border_grey: "#ebe8f4",
        border_dark: "#cac6da",
        invisible_rgba: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
