"use client"; // Isso permite que o ThemeProvider rode sem erros

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
