/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)'],
    },
    extend: {
      colors:{
        primary: "#f06123"
      },
      backgroundImage: {
        'fancy-gradient': 'linear-gradient(189deg, rgba(237, 251, 242, 0.20) 3.72%, rgba(245, 245, 245, 0.20) 92.19%), linear-gradient(314deg, #EDFBF1 22.26%, rgba(255, 255, 255, 0.13) 100%), linear-gradient(222deg, rgba(229, 222, 242, 0.06) 32.81%, #E5DEF2 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontWeight: {
        600: 600
      },
      colors: {
        light: 'rgba(0, 0, 0, 0.16)',
        tertiary: 'rgba(0, 0, 0, 0.45)',
        primary: 'rgba(0, 0, 0, 0.88)'
      },
      gridTemplateColumns: {
        'supabase-detail': '300px auto'
      },
      dropShadow: {
        'xxl': '0px 1px 4px 0px #0000000A'
      }
    },
    screens: {
      'ssm': '375px',
      'xsm': '499px',
      'sm': '640px',
      'md': '768px',
      'xmd': '801px',
      'lg': '1024px',
      'xlg': '1200px',
      'xl': '1280px',
      'xxl': '1440px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
