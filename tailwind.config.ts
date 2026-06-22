import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // night / ink — the deep jungle dark
        ink: {
          950: "#05080d",
          900: "#0a0e16",
          800: "#0f1622",
          700: "#16202f",
        },
        // water / calm — Koba's stillness
        water: {
          DEFAULT: "#2dd4bf",
          light: "#5eead4",
          glow: "#38bdf8",
          deep: "#0e7490",
        },
        // fire / rage — the Frenzy, Doku
        rage: {
          DEFAULT: "#ef4444",
          light: "#f97316",
          deep: "#991b1b",
        },
        // lantern / gold — honor, the blade
        gold: {
          DEFAULT: "#f5b942",
          light: "#fcd34d",
          deep: "#b45309",
        },
      },
      fontFamily: {
        display: ['"Anton"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        jp: ['"Shippori Mincho"', "serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(45,212,191,0.45)",
        "glow-gold": "0 0 40px -6px rgba(245,185,66,0.5)",
        ember: "0 0 50px -8px rgba(239,68,68,0.5)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        ripple: "ripple 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
