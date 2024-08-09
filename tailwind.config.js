// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#blue', // Add your custom color
        secondary: '#14171a', // Another custom color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
      spacing: {
        '72': '18rem', // Custom spacing value
      },
    },
  },
  plugins: [],
};
