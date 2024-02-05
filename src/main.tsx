import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/screens/Home/Home'
import './assets/styles/global.css'
import styles from './components/screens/Home.module.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
