import React from 'react'
import s from './app.module.sass'
import { Header } from './components/header/header'
import { Navbar } from './components/navbar/navbar'
import { CMP } from './components/cmp/cmp'

export const App = () => {
  return (
    <div className={s.app}>
      <Header/>
      <div className={s.content}>
        <Navbar/>
        <CMP/>
      </div>
    </div>
  )
}