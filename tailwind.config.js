import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      joti: ['PlaywriteNZGuides', ...defaultTheme.fontFamily.sans],
}
    },
  },
  plugins: [],
}