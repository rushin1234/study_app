import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { ImgsProvider } from './context/imgs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <ImgsProvider>
    <App />
    </ImgsProvider>
  </React.StrictMode>
  </BrowserRouter>,
)
