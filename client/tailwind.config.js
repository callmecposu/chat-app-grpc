/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar')({nocompatible: true})],
  daisyui: {
    themes: ['dark']
  }
}

