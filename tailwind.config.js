/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-bg": "#2c2c2c",
        "dark-bg-2": "#202020",
        "chat-green": "#005c4b",
        "chat-gray": "#353535",
        "light-gray": "#7d7d7d",
        "gray-txt": "#d3d3d3",
        "dark-gray": "#222222",
        "input-dark": "#383838",
        "bright-green": "#1daa61",
      },
    },
  },
  plugins: [],
};
