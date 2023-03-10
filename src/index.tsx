import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import RootStore from './stores'
import { Provider } from './context/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider value={RootStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
