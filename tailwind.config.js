/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fefefe",
          "200": "#fcfcfc",
          "300": "#0f1407",
          "400": "#000c1a",
          "500": "#010103",
          "600": "rgba(255, 255, 255, 0.64)",
        },
        darkslategray: {
          "100": "#333",
          "200": "#263238",
        },
        dodgerblue: {
          "100": "rgba(64, 154, 255, 0.24)",
          "200": "rgba(64, 154, 255, 0.32)",
        },
        silver: "#c7c7c7",
        darkgray: "#a9b1bb",
        tomato: "rgba(255, 114, 94, 0.24)",
        dimgray: "#706f7b",
        royalblue: "#0078ff",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f5f5f5",
          "300": "#efefef",
        },
        lightskyblue: "rgba(128, 187, 255, 0.24)",
        "ut-80": "#c5cbd1",
      },
      spacing: {},
      fontFamily: {
        "h300-bold": "Montserrat",
        "body300-rg": "'Open Sans'",
        "h200-blod": "Inter",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        poppins: "Poppins",
        lato: "Lato",
      },
      borderRadius: {
        "13xl": "32px",
        "3xl": "22px",
      },
    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      lg: "1.125rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      xl: "1.25rem",
      "43xl": "3.875rem",
      "18xl": "2.313rem",
      "31xl": "3.125rem",
      sm: "0.875rem",
      "29xl": "3rem",
      "10xl": "1.813rem",
      "19xl": "2.375rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
