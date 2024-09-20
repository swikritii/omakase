/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        phone: { max: "431px" },
        phoneSm: "431px",
        phoneWide: "480px",
        phoneLg: "576px",
        tablet: "768px",
        phablet: "992px",
        desktop: "1200px",
        desktopLg: "1460px",
      },
      fontFamily: {
        body: ["Outfit", "sans-serif"],
        heading: ["Bebas Kai", "sans-serif"],
      },
      colors: {
        primary: {
          brand: "#DD2B2B",
        },
        gray: {
          brand: "#F4F4F4",
          100: "#4F4F4F",
          light: "#F9F9F9",
          dark: "#333333",
        },
        white: {
          brand: "#FFFFFF",
          100: "#F5F5F5",
          200: "#d9d9d9",
        },
        black: {
          brand: "#000000",
          100: "#1A1A1A",
        },
      },
      fontSize: {
        //HEADING FONT SIZES-

        //heading banner - 272px
        headingDisplay: [
          "17rem",
          {
            lineHeight: "82%",
            fontWeight: "400",
            letterSpacing: "-10px",
            fontFamily: ["Bebas Kai", "sans-serif"],
          },
        ],

        //heading section title - 72px
        headingSection: [
          "4.5rem",
          {
            lineHeight: "70px",
            fontWeight: "400",
            letterSpacing: "-0.64px",
            fontFamily: ["Bebas Kai", "sans-serif"],
          },
        ],

        //heading card xl- 48px
        "headingCard-xl": [
          "3rem",
          {
            lineHeight: "68px",
            fontWeight: "400",
            letterSpacing: "-0.64px",
            fontFamily: ["Bebas Kai", "sans-serif"],
          },
        ],

        //heading card lg- 36
        "headingCard-lg": [
          "2.25rem",
          {
            lineHeight: "130%",
            fontWeight: "400",
            letterSpacing: "-0.32px",
          },
        ],

        //headingCard md 35
        "headingCard-md": [
          "2.188rem",
          {
            lineHeight: "130%",
            fontWeight: "400",
            letterSpacing: "-0.32px",
          },
        ],

        //headingCard sm 22
        "headingCard-sm": [
          "1.375rem",
          {
            lineHeight: "130%",
            fontWeight: "400",
            letterSpacing: "-0.32px",
          },
        ],

        //BODY FONT SIZES
        //captionBanner - 42px
        captionBanner: [
          "2.6rem",
          {
            lineHeight: "100%",
            fontWeight: "300",
            letterSpacing: "0.8px",
          },
        ],

        //body-19
        "bodyXl-reg": [
          "1.188rem",
          {
            lineHeight: "130%",
            letterSpacing: "-0.32px",
            fontWeight: "400",
          },
        ],

        "bodyXl-light": [
          "1.188rem",
          {
            lineHeight: "140%",
            letterSpacing: "-0.32px",
            fontWeight: "200",
          },
        ],

        //body 18
        "bodyLg-reg": [
          "1.125rem",
          {
            lineHeight: "100%",
            fontWeight: "400",
            letterSpacing: "0.64px",
          },
        ],

        //body 17
        "body-reg": [
          "1.063rem",
          {
            lineHeight: "130%",
            fontWeight: "400",
            letterSpacing: "-0.32px",
          },
        ],

        "body-medium": [
          "1.04rem",
          {
            lineHeight: "120%",
            fontWeight: "400",
            letterSpacing: "0.8px",
          },
        ],

        //body 16 - link, nav, btn
        link: [
          "1rem",
          {
            lineHeight: "100%",
            fontWeight: "400",
            letterSpacing: "0.8px",
          },
        ],
      },

      backgroundImage: {
        whiteGrad:
          "linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        blackRadialGrad:
          "radial-gradient(rgba(44, 44, 44, 100), rgba(0, 0, 0, 100))",
        blackGrad:
          "linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
      },
      borderRadius: {
        24: "24px",
      },
      dropShadow: {
        textShd: "0 3px 6px #000000",
      },
      transitionDuration: {
        "3s": "0.3s",
        "4s": "0.4s",
      },
    },
  },
  plugins: [],
};
