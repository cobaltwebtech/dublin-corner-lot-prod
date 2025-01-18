const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        current: "currentColor",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        green: {
          50: '#edf8ec',
          100: '#dcf1da',
          200: '#bae3b5',
          300: '#98d591',
          400: '#76c76c',
          500: '#54b948',
          600: '#439439',
          700: '#326f2b',
          800: '#214a1c',
          900: '#10250e',
        },
        gold: {
          50: '#fffae6',
          100: '#fff5cd',
          200: '#ffec9b',
          300: '#ffe369',
          400: '#ffda36',
          500: '#ffd105',
          600: '#cca704',
          700: '#997d03',
          800: '#665302',
          900: '#4c3e01'
        },
        blue: {
          50: '#ebf8fd',
          100: '#d7f1fb',
          200: '#afe4f7',
          300: '#88d6f4',
          400: '#60c9f0',
          500: '#39bced',
          600: '#2d96bd',
          700: '#22708e',
          800: '#164b5e',
          900: '#113847'
        },
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 4s cubic-bezier(0.32, 0, 0.67, 0)',
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
