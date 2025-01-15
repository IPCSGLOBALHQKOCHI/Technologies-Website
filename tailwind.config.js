/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#1E1E1E",
      },
      fontFamily:{
        Aspek50:["aspekta50"],
        Aspek100:["aspekta100"],
        Aspek150:["aspekta150"],
        Aspek200:["aspekta200"],
        Aspek250:["aspekta250"],
        Aspek300:["aspekta300"],
        Aspek350:["aspekta350"],
        Aspek400:["aspekta400"],
        Aspek450:["aspekta450"],
        Aspek500:["aspekta500"],
        Aspek550:["aspekta550"],
        Aspek600:["aspekta600"],
        Aspek650:["aspekta650"],
        Aspek700:["aspekta700"],
        Aspek750:["aspekta750"],
        Aspek800:["aspekta800"],
        Aspek850:["aspekta850"],
        Aspek900:["aspekta900"],
        Aspek950:["aspekta950"],
        Aspek1000:["aspekta1000"],
      }
    },
  },
  plugins: [],
}

