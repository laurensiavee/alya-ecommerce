import type { Config } from "tailwindcss"
import flowbite from "flowbite-react/tailwind";
const config = {

  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    flowbite.content(),
    "./node_modules/flowbite/**/*.js"
	],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'primary-text-dark': '#041415',
        'primary-text': '#565562',
        'secondary-text': '#8C8C8C',
        'tertiary-text': '#B1B1B1',

        'default-bg': '#FAFAFA',
        'default-bg-gray': '#EEEEEE',
        'default-surface': '#DDDDD5', 
        
        'primary-darker': '#2A75E6',
        'primary-dark': '#3F8BE3',
        'primary': '#5EB1FF',
        'primary-light': '#A0C9FF',
        'primary-lighter': '#C8E3FF',

        'secondary-darker': '#3D978C',
        'secondary-dark': '#4AA79F',
        'secondary': '#66D1C4',
        'secondary-light': '#A1E2D6',
        'secondary-lighter': '#D1F4EB',

        'tertiary-darker': '#8A76FF',
        'tertiary-dark': '#9D85FF',
        'tertiary': '#C9B6FF', 
        'tertiary-light': '#E0D7FF',
        'tertiary-lighter': '#F0E9FF',

        'accent-darker': '#E65D4D',
        'accent-dark': '#FF6C56',
        'accent': '#FFA58C', 
        'accent-light': '#FFB8A6',
        'accent-lighter': '#FFD1BB',

        'success': '#A4D7A0', 
        'warning': '#FFCC80', 
        'error': '#FF6A6A', 
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans font
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    flowbite.plugin(),
  ],
  
} satisfies Config

export default config