"use client";

import { notoSansJp } from "@/libs/font";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: notoSansJp.style.fontFamily,
  },
});
