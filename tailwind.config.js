/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo 500
          dark: '#4338ca',    // Indigo 700
        },
        secondary: {
          DEFAULT: '#ec4899', // Pink 500
          dark: '#be185d',    // Pink 700
        },
        dark: {
          bg: '#0f172a',      // Slate 900
          card: '#1e293b',    // Slate 800
        }
      }
    },
  },
  plugins: [],
}
