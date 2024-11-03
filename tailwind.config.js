/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color:{
          1: "#ED7D2B",
          2: "#1C120D",
          3: "#FFFBF3",
          4: "#F0DDCA"
        },
        n:{
          1: "#ED7D2B",
          2: "#1C120D",
          3: "#FFFBF3",
          4: "#F0DDCA",
        },
      },
      backgroundImage:{
        "text-gradient":"linear-gradient(90deg, #46FFFF , #62E862)",
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(from 225deg at 52% 50%, #62E862, #46FFFF, rgba(136, 255, 206, 1), #62E862)",
      },
      transitionTimingFunction : {
        DEFAULT: "linear",
      },
      transitionDuration : {
        DEFAULT : "200ms"
      }
    },
  },
  plugins: [],
}

