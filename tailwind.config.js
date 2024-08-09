/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/home/background-home-desktop.jpg')",
        'destination': "url('/destination/background-destination-desktop.jpg')",
        'crew': "url('/crew/background-crew-desktop.jpg')",
        'technology': "url('/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
}

