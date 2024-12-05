/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    extract
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        Baloo: ['Baloo 2', 'sans-serif'],
      },
      colors: {
        bluePrincipal: '#5F01D3'
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle at 50% 5%,  #07AED8, #FDFDFD75)'
      }
    },
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.lg')]
    })
  },
  plugins: [fluid]
}
