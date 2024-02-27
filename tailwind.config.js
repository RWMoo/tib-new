module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      xs: "361px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      width: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  variants: {
    extend: { borderWidth: ["hover", "focus"], margin: ["hover", "focus"] },
  },
  plugins: [require('@tailwindcss/typography')],
};
