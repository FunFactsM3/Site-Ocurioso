import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from './App'
import { DarkProviders } from './providers/DarkThemeContext'
import { DashProviders } from "./providers/DashContext";

import { ModalProviders } from './providers/ModalContext'
import { SpeechProviders } from './providers/SpeechContext'
import { UserProviders } from './providers/UserContext'

import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
  <BrowserRouter>
    <GlobalStyles />
      <SpeechProviders>
          <ModalProviders>
            <UserProviders>
              <DarkProviders>
                  <DashProviders>
                <App />
              </DashProviders>
             </DarkProviders>
          </UserProviders>
        </ModalProviders>
    </SpeechProviders>
  </BrowserRouter>
</React.StrictMode>,
)

// import App from "./App";
// import React from "react";
// import { BrowserRouter } from "react-router-dom";

// import { ModalProviders } from "./providers/ModalContext";
// import { UserProviders } from "./providers/UserContext";

// // import { mainTheme } from "./styles/theme";
// import { ThemeProvider } from "styled-components";
// import { DashProviders } from "./providers/DashContext";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider theme={mainTheme}>
//         <ModalProviders>
//           <UserProviders>
//             <DashProviders>
//               <App />
//             </DashProviders>
//           </UserProviders>
//         </ModalProviders>
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
