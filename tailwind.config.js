const { nextui } = require('@nextui-org/react');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'boston-blue-10': 'rgb(30 41 59)',
      'boston-blue-50': '#ecfdff',
      'boston-blue-100': '#d0f8fd',
      'boston-blue-200': '#a6effb',
      'boston-blue-300': '#69e1f7',
      'boston-blue-400': '#25c9eb',
      'boston-blue-500': '#09acd1',
      'boston-blue-600': '#0b94be',
      'boston-blue-700': '#106e8e',
      'boston-blue-800': '#165974',
      'boston-blue-900': '#174b62',
      'boston-blue-950': '#093143',
      'boston-blue-950-alpha-8': 'rgba(81,89,116,.8)',
      'boston-blue-950-alpha-4': 'rgba(81,89,116,.4)',
      'light-neutral': '#E4E3EA',
      'white-alpha': 'rgba(255, 255, 255, 0.8)',
      'white-alpha-light': 'rgba(255, 255, 255, 0.5)',
      'black-alpha': 'rgba(47, 47, 47, 0.4)',
      'black-alpha-8': 'rgba(47, 47, 47, 0.8)',
      'black-alpha-9': 'rgba(47, 47, 47, 0.9)',
      'black-alpha-2': 'rgba(47, 47, 47, 0.2)',
      'black-alpha-1': 'rgba(47, 47, 47, 0.1)',
      light: '#C1DADF',
      black: '#000',
      white: 'rgba(255, 255, 255, 1)',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        default: ['Roboto', 'sans'],
      },
      borderWidth: {
        'active-link': '1px',
      },
      borderColor: (theme) => ({
        'active-link': theme('colors.dark-tertiary'),
        'white-alpha-light': theme('colors.white-alpha-light'),
      }),
      backgroundImage: {
        'login-default': "url('/src/assets/images/bg-login.jpeg')",
      },
      dark: {
        borderColor: (theme) => ({
          'active-link': theme('colors.light-neutral'),
          nav: theme('colors.boston-blue-10'),
        }),
      },
    },
  },
  plugins: [nextui(), addDynamicIconSelectors()],
};
