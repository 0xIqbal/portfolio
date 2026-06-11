/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050816',
        neon: '#A855F7',
        glow: '#C084FC',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.28)',
        neon: '0 0 30px rgba(168, 85, 247, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(168, 85, 247, 0.18)' },
          '50%': { boxShadow: '0 0 32px rgba(168, 85, 247, 0.42)' },
        },
        revealUp: {
          '0%': { opacity: 0, transform: 'translateY(32px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        revealUp: 'revealUp 0.8s ease-out forwards',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
