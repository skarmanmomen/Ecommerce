/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    extend: {
      height: {
        h: "380px"
      },
      width: {
        width: "430px"
      },
      fontFamily: {
        roboto: "'Poppins', sans-serif",
        popins: "'Roboto', sans-serif"
      },
      fontSize: {

      },
      right: {
        r: "11rem"
      },
      colors: {
        primary: "#FD3D57",
        blue: "#0984E3",
        whieblue: "#F9FCFF",
        bluewhite: "#EEF7FF",
        whitepurple: "#FAF8FB"
      }
    },

  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"]
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}