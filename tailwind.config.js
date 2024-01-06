/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F83CC', // A brighter, more vivid blue
        secondary: '#D1B06B', // A brighter, more vibrant gold
        accent1: '#A3B4A2', // A muted, calming green
        accent2: '#D9D0C1', // A soft, neutral beige
        background: '#1A202C', // A deep, dark charcoal for the background
        textPrimary: '#FFFFFF', // Crisp, clear white for primary text
        textSecondary: '#CCCCCC', // Lighter grey for secondary text
        highlight: '#9C3D54', // A rich, deep maroon for highlights
        muted: '#606F7B'
      },
      listStyleImage: {
        checkmark: 'url("/assets/icons/checkmark.png")',
      },
    },
  },
  plugins: [],
}
