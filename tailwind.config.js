/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#0B1215",
      },
      fontFamily: {
        // aspekta: ['Aspekta', 'sans-serif'], 
        proxima:[ "proxima-nova", 'sans-serif'],
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 50s linear infinite",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

