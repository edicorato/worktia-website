import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C25C1A",
        anthracite: "#2D2D2D",
        paper: "#FAFAFA",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        phone: "0 26px 70px rgba(45, 45, 45, 0.2)",
        soft: "0 18px 45px rgba(45, 45, 45, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
