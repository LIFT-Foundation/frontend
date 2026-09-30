/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#07241e',
          900: '#0b332c',
          850: '#0e3e36',
          800: '#114a40',
          700: '#176054',
          600: '#1e7869',
          100: '#e1f5ee',
          50: '#f0faf6',
        },
        peach: {
          50: '#fff9f5',
          100: '#fdf1e8',
          200: '#fce2d0',
          300: '#f9c5a7',
          400: '#f6a378',
          500: '#f28e63', // Main button color
          600: '#ea713f',
          700: '#c55225',
        },
        charity: {
          greenBadge: '#0e7a68',
          blueBadge: '#0284c7',
          orangeBadge: '#ea580c',
          tealBadge: '#0d9488',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'float': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
        'button': '0 4px 14px rgba(242, 142, 99, 0.35)',
      }
    },
  },
  plugins: [],
}
