import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/index.css'
import { Header } from './app/components/header/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
