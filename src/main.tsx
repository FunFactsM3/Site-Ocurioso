import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ModalProviders } from "./providers/ModalContext";
import { UserProviders } from "./providers/UserContext";

import { mainTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { DashProviders } from "./providers/DashContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <ModalProviders>
          <UserProviders>
            <DashProviders>
              <App />
            </DashProviders>
          </UserProviders>
        </ModalProviders>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
