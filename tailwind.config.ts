// @ts-nocheck

import { prefix } from "@/lib";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        intro: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        cursor: {
          from: {
            "border-right": "3px solid white",
          },
          to: {
            "border-right": "none",
            "margin-right": "6px",
          },
        },
        up: {
          "0%": {
            opacity: 0,
            transform: "translateY(50%)",
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },
        down: {
          "0%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(50%)",
          },
        },
      },
      animation: {
        intro: "intro 2s",
        cursor: "cursor 1s steps(2) infinite",
        up: "up 1.2s",
        down: "down 1.2s",
      },
      backgroundImage: {
        small: `url("/img/main2.jpg")`,
        big: `url("/img/main.jpg")`,
      },
    },
  },
  plugins: [],
};
export default config;
