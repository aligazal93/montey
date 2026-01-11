module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        sm: '15px',
        md: '20px',
        lg: '24px',
        xl: '24px',
        '2xl': '24px',
      },
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
    extend: {
      fontFamily: {
        myfont: ['ReadexPro', 'sans-serif'],
      },
      fontSize: {
        custom28: '28px',
        custom26: '26px',
        custom24: '24px',
        custom22: '22px',
        custom20: '20px',
        custom18: '18px',
        custom16: '16px',
        custom14: '14px',
        custom12: '12px',
        custom10: '10px',
      },
      colors: {
        primary: '#9B8642',
        secondary: '#00FA9A',
        redColor: '#E21E26',
        grey: '#D1F3E5',
        darkGrey: '#565656',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideInRight: 'slideInRight 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
        slideInUp: 'slideInUp 1s ease-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
    },
  },
};
