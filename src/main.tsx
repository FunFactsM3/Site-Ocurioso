import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { DarkProviders } from './providers/DarkThemeContext'

import { ModalProviders } from './providers/ModalContext'
import { SpeechContext, SpeechProviders } from './providers/SpeechContext'
import { UserProviders } from './providers/UserContext'

import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
  <BrowserRouter>
    <SpeechProviders>
        <ModalProviders>
          <UserProviders>
            <DarkProviders>

            <GlobalStyles />
            <App />
            </DarkProviders>

          </UserProviders>
        </ModalProviders>
    </SpeechProviders>
  </BrowserRouter>
</React.StrictMode>,
)
