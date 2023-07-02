import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import BasicRouter from './routers/basic/index.tsx'
import BasicDataRouter from './routers/basic-data-router/index.tsx'
import './index.css'
import store from './store/index'
import { Provider } from 'react-redux'
import UseAntd from './components/useAntd.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <hr />
    <BrowserRouter>
      <BasicRouter></BasicRouter>
    </BrowserRouter>
    <hr />
    <BasicDataRouter></BasicDataRouter>
    {/* use antd */}
    <UseAntd />
  </React.StrictMode>
)
