/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Specify the paths to your template files
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",  // If you're using app directory in Next.js 13
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adding Inter font to the Tailwind theme
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
