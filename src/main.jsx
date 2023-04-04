import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import './index.css'
import { AppContextProvider } from './AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider value={'hola'}>
    <Router>
      <App />
    </Router>
  </AppContextProvider>,
)

