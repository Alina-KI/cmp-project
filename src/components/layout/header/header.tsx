import React from 'react'
import s from './header.module.sass'
import { ReactComponent as Map } from '../../../assets/images/Map.svg'
import { ReactComponent as ArrowBack } from '../../../assets/images/ArrowBack.svg'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.iconBlock}>
        <button className={s.block}>
          <Map className={s.icon}/>
        </button>
        <button className={s.block}>
          <ArrowBack className={s.icon}/>
        </button>
      </div>
      <div className={s.linkBlock}>
        <a href="#" className={`${s.link} ${s.linkActive}`}>Просмотр</a>
        <a href="#" className={s.link}>Управление</a>
        <div className={s.line}/>
      </div>
    </div>
  )
}