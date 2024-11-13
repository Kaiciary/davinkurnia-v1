import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-Inter)', 'sans-serif']
      },
      container:{
        center: true,
        padding: "15px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1200px"
        },
      },
    },
  },
  plugins: [],
};
export default config;
