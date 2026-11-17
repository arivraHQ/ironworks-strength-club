import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0px",
      sm: "0px",
      DEFAULT: "0px",
      md: "0px",
      lg: "0px",
      xl: "0px",
      "2xl": "0px",
      "3xl": "0px",
      full: "0px",
    },
    extend: {
      colors: {
        bg: "#0C0C0B",
        surface: "#161614",
        "surface-raised": "#1E1E1B",
        text: "#F1EEE6",
        primary: "#D4FF3A", // Volt Lime
        accent: "#FF5A1F",  // Industrial Orange
        muted: "#8B8B84",
        hairline: "rgba(241, 238, 230, 0.14)",
      },
      fontFamily: {
        heading: ["var(--font-big-shoulders)", "Impact", "sans-serif"],
        body: ["var(--font-archivo)", "sans-serif"],
      },
      boxShadow: {
        "hard-lime": "6px 6px 0px #D4FF3A",
        "hard-accent": "6px 6px 0px #FF5A1F",
        "hard-bone": "6px 6px 0px #F1EEE6",
        "hard-lime-sm": "4px 4px 0px #D4FF3A",
      },
      borderWidth: {
        "2": "2px",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 25s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
