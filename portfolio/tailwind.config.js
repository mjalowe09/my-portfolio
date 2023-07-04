/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('assets/hero-bg.svg')"
      },
      screens: {
        'md-2':'781px'
      },
      fontSize: {
        'xxs': '0.6rem',
      },
      colors:{
        blue:'#2EC9CD',
        red:'#B51436',
        black:'#050608'
      },
      spacing: {
        'lg': '26rem',
        '600': '700px'
      },
      height: {
        '19/20': '95%',
        '88': '22rem',
        '99': '24.75rem',
        '110': '28rem',
        '600': '600px',
        '800': '800px',
        '700': '700px'
      },
      width: {
        '7.5': '1.80rem',
        '19/20': '95%',
        '18': '4.5rem',
        '19': '4.75rem',
        '88': '22rem',
        '99': '24.75rem',
        '110': '28rem',
        '122': '32rem',
        '750': '750px',
        '900': '900px',
        '1000': '1000px',
        '7.5': '1.92rem'
      },
      margin:{
        '122': '37rem'
      },
      zIndex: {
        '1': '1',
      },
      inset: {
        '22': '5.5rem',
        '34':'8.5rem',
        '46':'11.50rem',
        '49':'12.25rem',
        '50':'12.50rem',
        '51':'12.75rem',
        '65': '16.25rem',
        '66': '16.5rem',
        '68': '17rem',
        '81':'20.25rem',
        '82':'20.50rem',
        '83':'20.75rem',
        '84':'21rem',
        '90': '22.5rem',
        '91': '22.75rem',
        '91.5': '22.87rem',
        '92': '23rem',
        '94': '23.5rem',
        '94.5': '23.62rem',
        '95': '23.75rem',
        '95.5': '23.87rem',
        '96.5': '24.12rem',
        '97': '24.25rem',
        '97.5': '24.37rem',
        '98': '24.5rem',
        '99': '24.75rem',
        '99.5': '24.878rem',
        '100': '25rem',
        '102': '25.5rem',
        '103': '25.75rem',
        '103.5': '25.87rem',
        '104': '26rem',
        '110': '28rem',
        '111': '28.1rem',
        '112': '28.75rem',
        '114': '29.35rem',
        '122': '32rem',
        '124': '32.50rem',
        '128': '33.50rem',
        '132': '34.50rem',
        '133': '34.75rem',
        '136': '35.50rem',
        '138': '36.00rem',
        '139': '36.25rem',
        '140': '36.50rem',
        '141': '36.75rem',
        '144': '37.50rem',
      }
    },
  },
  plugins: [],
}
