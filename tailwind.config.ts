import colors from "@mui/material/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

export default config;
