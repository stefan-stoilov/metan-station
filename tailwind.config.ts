import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
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
      typography: ({ theme }) => ({
        white: {
          css: {
            "--tw-prose-body": theme("colors.white"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-lead": theme("colors.white"),
            "--tw-prose-links": theme("colors.white"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-counters": theme("colors.white"),
            "--tw-prose-bullets": theme("colors.white"),
            "--tw-prose-hr": theme("colors.white"),
            "--tw-prose-quotes": theme("colors.white"),
            "--tw-prose-quote-borders": theme("colors.white"),
            "--tw-prose-captions": theme("colors.white"),
            "--tw-prose-code": theme("colors.white"),
            "--tw-prose-pre-code": theme("colors.white"),
            "--tw-prose-pre-bg": theme("colors.white"),
            "--tw-prose-th-borders": theme("colors.white"),
            "--tw-prose-td-borders": theme("colors.white"),
            "--tw-prose-invert-body": theme("colors.white"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.white"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.white"),
            "--tw-prose-invert-bullets": theme("colors.white"),
            "--tw-prose-invert-hr": theme("colors.white"),
            "--tw-prose-invert-quotes": theme("colors.white"),
            "--tw-prose-invert-quote-borders": theme("colors.white"),
            "--tw-prose-invert-captions": theme("colors.white"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.white"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.white"),
            "--tw-prose-invert-td-borders": theme("colors.white"),
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
