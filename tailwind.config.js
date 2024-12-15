/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        'primary-text': 'hsl(var(--primary-text))',
        'secondary-text': 'hsl(var(--secondary-text))',
        'tertiary-text': 'hsl(var(--tertiary-text))',
        'gray-primary': 'hsl(var(--gray-primary))',
        'gray-secondary': 'hsl(var(--gray-secondary))',
        'gray-tertiary': 'hsl(var(--gray-tertiary))',
        'purple-primary': 'hsl(var(--purple-primary))',
        'light-purple': 'hsl(var(--light-purple))',
        'input-bg': 'hsl(var(--input-bg))',
        'input-label': 'hsl(var(--input-label))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
