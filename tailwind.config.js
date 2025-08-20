/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern pale yellow professional theme
        'accent-primary': '#f4d03f',
        'accent-secondary': '#f7dc6f', 
        'accent-tertiary': '#f8c471',
        'accent-quaternary': '#fdeaa7',
        'accent-purple': '#f39c12',
        'accent-green': '#f1c40f',
      },
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'mono': ['Courier Prime', 'monospace'],
      },
      boxShadow: {
        'wes': '8px 8px 0px var(--tw-shadow-color)',
        'wes-hover': '12px 12px 0px var(--tw-shadow-color)',
        'wes-lg': '16px 16px 0px var(--tw-shadow-color)',
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'progress': 'progress 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'currentColor' },
        },
        progress: {
          '0%, 100%': { width: '30%' },
          '50%': { width: '70%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

