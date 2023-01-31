import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {StylesGlobal} from "./styles/StylesGlobal"
import {StylesReset} from "./styles/StylesReset"
import {StylesIndex} from "./styles/StylesIndex"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <StylesReset />
    <StylesGlobal />
    <StylesIndex />

    <App />
    </React.StrictMode>,
)
