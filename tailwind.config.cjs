module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '7.5': '1.875rem',
      },
      colors: {
        primary: {
          DEFAULT: '#6C25FF',
          dark: '#642AF5',
          light: '#6C25FF4B',
        },
        secondary: '#CBC9FF',
        lavender: '#DDDAFF',
        bg: '#F7F8F9',
        border: '#CBCBCB',
        text: {
          DEFAULT: '#1D2226',
          secondary: '#919191',
        },
        error: '#DD4A3D',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      borderRadius: {
        'popx': '6px',
      }
    },
  },
  plugins: [],
}
