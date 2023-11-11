import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'blob': "url('/blob.svg')",
      },
      backgroundPosition: {
        'right-farthest': '10% 50%',
      },
      colors:{
        primary: '#04C0D8',
        secondary: '#39395B',
        'background-darker': '#11113A',
        'background-lighter': '#1A1A48',
      }
    }
  },
  plugins: [
   daisyui,
   require('tailwind-scrollbar')({ nocompatible: true }),
   ],
   variants: {
      scrollbar: ['rounded']
  }
} satisfies Config
