import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'blob': "url('/blob.svg')",
        'radial1': "radial-gradient( farthest-side at bottom left, rgba(118, 19, 148, 0.459), transparent)",
        'radial2': "radial-gradient( farthest-corner at top right, rgba(41, 157, 165, 0.589), transparent 35rem)",
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
