/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#2b2e4a',
        accent: '#e6e9ff',
        card: '#343755',
      },
      boxShadow: {
        soft: '0 10px 35px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        mdplus: '14px',
      },
      animation: {
        rain: 'rainMove 18s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        rainMove: {
          '0%': { backgroundPosition: '0 -100%' },
          '100%': { backgroundPosition: '0 200%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};


