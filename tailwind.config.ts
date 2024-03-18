import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5973DB",
        "dark-border": "rgba(255,255,255,0.2)",
      },
      fontFamily: {
        body: ["var(--font-inter)"],
        heading: ["var(--font-fahkwang)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      boxShadow: {
        csm: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        cmd: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        // clg: "1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01), 54px 54px 28px -10px rgba(34, 33, 81, 0.15)",
        clg: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        cinner: "rgba(0, 0, 0, 0.3) 0px 6px 9px 0px inset",
      },
    },
  },
  plugins: [],
};

export default config;
