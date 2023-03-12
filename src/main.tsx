import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ModalProviders } from "./providers/ModalContext";
import { UserProviders } from "./providers/UserContext";

import { mainTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <ModalProviders>
          <UserProviders>
            <App />
          </UserProviders>
        </ModalProviders>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
