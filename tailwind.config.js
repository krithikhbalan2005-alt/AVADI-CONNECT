/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A5CFF', // Avadi Indigo
          light: '#EBEFFF',
          dark: '#1E40C2',
        },
        accent: {
          DEFAULT: '#00C2FF', // Vibrant Teal
          light: '#E0FAFF',
          dark: '#0099CC',
        },
        emergency: {
          DEFAULT: '#FF4B2B', // International Orange
          light: '#FFEBE8',
          dark: '#D03118',
        },
        bg: {
          light: '#FAFAFA',
          dark: '#121212',
          cardLight: '#FFFFFF',
          cardDark: '#1E1E1E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        btn: '16px',
        input: '16px',
      },
      boxShadow: {
        soft: '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        softDark: '0 4px 20px 0 rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
