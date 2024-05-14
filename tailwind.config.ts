import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "mat-saleh": ["Mat Saleh", "sans-serif"],
      },
      colors: {
        "custom-blue": "#313C58",
      },
      width: {
        "79": "79px",
      },
      height: {
        "30": "30px",
      },
      fontSize: {
        "32": "32px",
      },
      lineHeight: {
        "30": "30px",
      },
    },
  },
  plugins: [],
};
export default config;
