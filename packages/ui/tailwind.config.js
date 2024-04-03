import { extendsTailwindConfig } from '@repo-ui/tailwind-config'

export default extendsTailwindConfig({
  dirname: __dirname,
  config: {
    // content: ['./packages/**/*.{js,ts,jsx,tsx}'],
    theme: {
      screens: {
        '2xl': { max: '1920px' },
        xl: { max: '1440px' },
        lg: { max: '1152px' },
        xs: { max: '444px' },
      },
    },
  },
})
