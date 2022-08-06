module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },
  //  important: '#app',
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  darkMode: "class",
  // darkMode: ["class", '[data-mode="dark"]'],
  plugins: [require("@tailwindcss/typography")],
};
