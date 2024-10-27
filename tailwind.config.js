/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '999': '999',
      },
      colors: {
        blue: "#2997FF",
        special: "#CBACF9",
        offWhite: "rgb(219 230 255)",
        gray: {
          default: "#000000",
          100: "#000001",
          200: "#000002",
        }
      },
      backgroundImage: {
        'gradient_1': 'linear-gradient(90deg, #161A31 3.4%, #06091F 100%)',
        'gradient_2': 'linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)',
        'gradient_light': 'linear-gradient(180deg, rgba(4, 7, 29, 1) 0%, rgba(145, 144, 147, 0) 250%), linear-gradient(to left top, #9c9c9c, #727589, #595c6d, #464960, #3a3f5f, #1a1d34, #14182f, #0f122a, #0d1027, #0a0d23, #070a20, #04071d)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      },
      "animation": {
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        }
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}