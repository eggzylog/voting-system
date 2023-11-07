import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'blob': "url('./src/assets/svg/blob.svg')" 
      }
    }
  },
  plugins: [daisyui]
} satisfies Config
