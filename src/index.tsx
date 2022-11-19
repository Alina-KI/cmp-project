import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import { App } from './app'
import reportWebVitals from './reportWebVitals'
import { configure } from 'mobx'

configure({enforceActions: 'never'})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
    <App/>
)

reportWebVitals()
