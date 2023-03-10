import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { DarkProviders } from './providers/DarkThemeContext'

import { ModalProviders } from './providers/ModalContext'
import { UserProviders } from './providers/UserContext'

import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
  <BrowserRouter>
    <DarkProviders>
      <ModalProviders>
        <UserProviders>
          <GlobalStyles />
          <App />
        </UserProviders>
      </ModalProviders>
    </DarkProviders>
  </BrowserRouter>
</React.StrictMode>,
)
