import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import ThemeInitializer from "./components/ThemeInitializer";

import App from "./App";
import theme from "./theme";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={theme}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        storageKey="chakra-ui-color-mode"
        scriptProps={{ type: "application/json" }}
      >
        <ThemeInitializer />
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>
);