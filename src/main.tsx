import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import ThemeInitializer from "./components/ThemeInitializer.tsx";

import App from "./App.tsx";
import theme from "./theme.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={theme}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="chakra-ui-color-mode">
        <ThemeInitializer/>
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>,
);
