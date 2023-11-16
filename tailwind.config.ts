import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#122231',
        primary_text:'#3D4F60'
       } ,
       fontFamily:{
        EinaRegular:['EinaRegular','sans-serif'],
        EinaBold:['EinaBold','sans-serif'],
        EinaSemiBold:['EinaSemiBold','sans-serif'],
        U8Regular:['U8Regular','sans-serif'],
        karla:['karla','sans-serif'],
       }
    },
  },
  plugins: [],
}
export default config
