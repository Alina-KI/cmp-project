import React, { useEffect } from 'react'
import s from './app.module.sass'
import { Header } from './components/header/header'
import { Navbar } from './components/navbar/navbar'
import { CMP } from './components/cmp/cmp'
import { entityStore } from './store/entity-store'

export const App = () => {
  useEffect(() => {
    entityStore.getTreeRows().then()
  }, [])


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