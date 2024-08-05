import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      maxWidth: {
        "8xl": '1400px'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foregound: "hsl(var(--primary-foregound))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foregound: "hsl(var(--secondary-foregound))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foregound: "hsl(var(--destructive-foregound))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foregound: "hsl(var(--muted-foregound))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foregound: "hsl(var(--accent-foregound))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foregound: "hsl(var(--popover-foregound))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foregound: "hsl(var(--card-foregound))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px )",
        sm: "calc(var(--radius) - 4px )",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0'},
          to: {height: "var(--radix-accourdion-content-height)"}
        },
        'accordion-up': {
          from: {height: "var(--radix-accourdion-content-height)"},
          to: {  height: '0'}
        }
      },
      animation: {
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
