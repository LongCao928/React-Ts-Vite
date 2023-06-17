import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import BasicRouter from './routers/basic/index.tsx'
import BasicDataRouter from './routers/basic-data-router/index.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <hr />
    <BrowserRouter>
      <BasicRouter></BasicRouter>
    </BrowserRouter>
    <hr />
    <BasicDataRouter></BasicDataRouter>
  </React.StrictMode>
)
