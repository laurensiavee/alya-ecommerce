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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // color pallete:
        'l-text': '#041415',
        'l-text-secondary': '#565562',
        'l-bg': '#F5FAFC',
        
        'l-primary': '#5EB1FF',
        'l-secondary': '#66D1C4 ',
        'l-accent': '#C9B6FF',
        'd-text': '#EAFAFB',
        'd-bg': '#020B0D',
        'd-primary-darker': '#007D9B',
        'd-primary-dark': '#0098C4',
        'd-primary': '#FFA58C',
        'd-primary-light': '#33B8E6',
        'd-primary-lighter': '#80D4F2',
        'd-secondary': '#3EB489',
        'd-accent': '#C9B6FF',

        'n-primary-darker': '#2A75E6',
        'n-primary-dark': '#3F8BE3',
        'n-primary': '#5EB1FF',
        'n-primary-light': '#A0C9FF',
        'n-primary-lighter': '#C8E3FF',
        'n-secondary-darker': '#3D978C',
        'n-secondary-dark': '#4AA79F',
        'n-secondary': '#66D1C4',
        'n-secondary-light': '#A1E2D6',
        'n-secondary-lighter': '#D1F4EB',
        'n-tertiary-darker': '#8A76FF',
        'n-tertiary-dark': '#9D85FF',
        'n-tertiary': '#C9B6FF', 
        'n-tertiary-light': '#E0D7FF',
        'n-tertiary-lighter': '#F0E9FF',
        'n-accent-darker': '#E65D4D',
        'n-accent-dark': '#FF6C56',
        'n-accent': '#FFA58C', 
        'n-accent-light': '#FFB8A6',
        'n-accent-lighter': '#FFD1BB',
        'n-success': '#A4D7A0', 
        'n-warning': '#FFCC80', 
        'n-error': '#FF6A6A', 
        'n-bg': '#E8F7F3', 
        'n-surface': '#D1D7D9', 
        'n-white': '#EAFAFB', 
        'n-text-primary': '#1E1E1E', 
        'n-text-secondary': '#8C8C8C', 
        'n-text-tertiary': '#B1B1B1', 
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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