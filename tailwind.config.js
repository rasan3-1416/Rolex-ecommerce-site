/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Custom Font
      fontFamily: {
        body: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      // Custom Z - Index Value
      zIndex: {
        "tooltip": 10,
        "fixed": 100,
      }
    },
    screens: {
      "xm": {"max" : "320px"},
      "sm": "576px",
      "md": "768px",
      "lg": "1024px",
    },
    colors: {
      // Color Platte According to the css variable
      "transparent": "transparent",
      "c-container": "hsl(var(--container-color) / <alpha-value>)",
      "c-body": "hsl(var(--body-color) / <alpha-value>)",
      "c-border": "hsl(var(--border-color) / <alpha-value>)",
      "c-first": "hsl(var(--first-color) / <alpha-value>)",
      "c-btn": "hsl(var(--btn-color) / <alpha-value>)",
      "c-btn-alt": "hsl(var(--btn-color-alt) / <alpha-value>)",
      "c-prime": "hsl(var(--text-color) / <alpha-value>)",
      "c-prime-light": "hsl(var(text-color-light) / <alpha-value>)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "1024px",
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities({
        // Responsive Typography
        ".fs-2xl": {fontSize: "2rem", "@media (min-width: 768px)": {fontSize: "2.5rem"}
        },
        ".fs-xl": {fontSize: "1.5rem", "@media (min-width: 768px)": {fontSize: "2.25rem",}
        },
        ".fs-lg": {fontSize: "1.25rem", "@media (min-width: 768px)": {fontSize: "1.5rem",}
        },
        ".fs-md": {fontSize: "1rem", "@media (min-width: 768px)": {fontSize: "1.25rem",}
        },
        ".fs-normal": {fontSize: "0.938rem", "@media (min-width: 768px)": {fontSize: "1rem",}
        },
        ".fs-xm": {fontSize: "0.813rem", "@media (min-width: 768px)": {fontSize: "8.75rem", }
        },
        ".fs-xm": {fontSize: "0.75rem", "@media (min-width: 768px)": {fontSize: "8.13rem",}
        },
        // Responsive Header Height
        ".h-height": {height: "var(--header-height)", "@media (min-width: 768px)": {height: "calc(var(--header-height) + 1.5rem)"}
        },
      })
    })
  ],
}

