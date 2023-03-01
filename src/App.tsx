import React from 'react'
import './App.scss'
import Navigations from './navigations/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navigations />
    </BrowserRouter>
  )
}

export default App
