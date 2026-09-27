import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090c",
        foreground: "#e6e8ee",
        // Neutral surface scale (dark premium base)
        surface: {
          950: "#08090c",
          900: "#0b0d12",
          850: "#0f1219",
          800: "#141824",
          700: "#1c2130",
          600: "#282f42",
        },
        // Restrained accent system
        accent: {
          DEFAULT: "#6366f1",
          soft: "#818cf8",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(120deg, #818cf8 0%, #6366f1 45%, #22d3ee 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
