import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ModalProviders } from './providers/ModalContext'
import { UserProviders } from './providers/UserContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
            <ModalProviders>
              <UserProviders>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </UserProviders>
            </ModalProviders>
  </React.StrictMode>,
)
