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
      // Custom Font Family
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
      "lg": "992px",
      "xl": "1024px",
    },
    colors: {
      // Color Platte According to the css variable
      "transparent": "transparent",
      "c-container": "hsl(var(--container-color) / <alpha-value>)",
      "c-body": "hsl(var(--body-color) / <alpha-value>)",
      "c-border": "hsl(var(--border-color) / <alpha-value>)",
      "c-first": "hsl(var(--first-color) / <alpha-value>)",
      "c-title": "hsl(var(--title-color) / <alpha-value>)",
      "c-btn": "hsl(var(--btn-color) / <alpha-value>)",
      "c-btn-alt": "hsl(var(--btn-color-alt) / <alpha-value>)",
      "c-prime": "hsl(var(--text-color) / <alpha-value>)",
      "c-prime-light": "hsl(var(text-color-light) / <alpha-value>)",
      "c-white": "var(--white)",
      "c-black": "var(--black)",
    },
  },
  plugins: [
    plugin(function({ addUtilities }){
      addUtilities({
        // Responsive Typography
        ".fs-2xl": {fontSize: "2rem", "@screen lg": {fontSize: "2.5rem"}
        },
        ".fs-xl": {fontSize: "1.5rem", "@screen lg": {fontSize: "2.25rem",}
        },
        ".fs-lg": {fontSize: "1.25rem", "@screen lg": {fontSize: "1.5rem",}
        },
        ".fs-md": {fontSize: "1rem", "@screen lg": {fontSize: "1.25rem",}
        },
        ".fs-normal": {fontSize: "0.938rem", "@screen lg": {fontSize: "1rem",}
        },
        ".fs-sm": {fontSize: "0.813rem", "@screen lg": {fontSize: "0.875rem", }
        },
        ".fs-xm": {fontSize: "0.75rem", "@screen lg": {fontSize: "0.813rem",}
        },
        // Responsive Header Height
        ".h-height": {height: "var(--header-height)", "@screen md": {height: "calc(var(--header-height) + 1.5rem)"}
        },
        // Custom Transition 
        ".trans-ease": {transition: "0.3s"},
        ".trans-ease-l": {transition: "0.4s"},
      })
    }),
    plugin(function({ addVariant }){
      addVariant("dynamic-style", ".dynamic-style&")
    }),
    plugin(function({ addComponents }){
      addComponents({
        // Custom Container Components Styles
        ".container": {
          maxWidth: "1024px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen xm": {
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
          },"@screen lg": {
            marginInline: "auto",
          }
        }
      })
    })
  ],
}

