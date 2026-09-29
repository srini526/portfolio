import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import './styles.css'
const p = window.location.pathname
createRoot(document.getElementById('root')).render(<React.StrictMode>{p === '/' || p === '/index.html' ? <App /> : <NotFound />}</React.StrictMode>)
