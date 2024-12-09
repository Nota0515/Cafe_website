/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
    },
    extend: {
      colors:{
        color:{
          1: "#ED7D2B",
          2: "#1C120D",
          3: "#FFFBF3",
          4: "#F0DDCA",
          5: "#81817E"
        },
        n:{
          1: "#ffffff",
          2: "#141412",
          3: "#DDBE63",
          4: "#FF8800",
          5:'#2A2A24',
          6: '#302828',
          7: "#FFFFDC"
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
      },
      fontFamily :{
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'inner-strong': 'inset 0 4px 6px rgba(0, 0, 0, 0.6)',
        'inner-darkest': 'inset 0 4px 10px rgba(0, 0, 0, 0.9)',
        '3xl': '7px 7px 5px 0 rgba(0, 0, 0, 0.5)',
      },
      dropShadow: {
        'xl': '0 35px 35px rgba(221, 190, 99, 0.3)',
      }
    },
    screens:{
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
    }
  },
  plugins: [],
}

