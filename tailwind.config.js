/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#13201a',
        paper: '#f7f5ef',
        vermilion: '#c94732',
        moss: '#4f6b53',
        line: '#c9cbc1',
        sand: '#e5e2d9',
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 33, 29, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        reveal: 'reveal 0.7s ease-out both',
      },
    },
  },
};
