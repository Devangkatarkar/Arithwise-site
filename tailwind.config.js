/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
  'primary-cta': '#7A2E8A',    // Purple
  'cta-hover': '#C94FA6',      // Magenta  
  'accent': '#F4A63A',         // Orange
  'headings': '#1E1E1E',       // Black
  'muted': '#6B6B6B',          // Grey
  'background': '#FBF5EF',     // Off-white
},
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}