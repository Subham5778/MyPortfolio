export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        primary: '#f59e0b', // amber-500
        text: '#f3f4f6', // gray-100
        muted: '#9ca3af', // gray-400
        cardBg: '#1f1f1f',
        cardBorder: '#374151' // gray-700
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
