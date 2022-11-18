import React, { useState } from 'react'
import s from './navbar.module.sass'
import { ReactComponent as Arrow } from '../../../assets/images/Arrow.svg'
import { NavbarItem } from '../../ui/navbar-item/navbar-item'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={s.navbar}>
      <button className={s.topNavbar} onClick={() => setIsOpen(!isOpen)}>
        <div className={s.block}>
          <div className={s.textBlock}>
            <span className={s.title}>Название проекта</span>
            <span className={s.abbreviation}>Аббревиатура</span>
          </div>
          <Arrow className={`${ s.arrow } ${isOpen && `${s.activeArrow}`}`}/>
        </div>
      </button>
      {isOpen &&
        <div>
          <NavbarItem title='По проекту'/>
          <NavbarItem title='Объекты'/>
          <NavbarItem title='РД'/>
          <NavbarItem title='МТО' isSelect={true}/>
          <NavbarItem title='СМР'/>
          <NavbarItem title='График'/>
          <NavbarItem title='МиМ'/>
          <NavbarItem title='Рабочие'/>
          <NavbarItem title='Капвложения'/>
          <NavbarItem title='Бюджет'/>
          <NavbarItem title='Финансирование'/>
          <NavbarItem title='Панормамы'/>
          <NavbarItem title='Камеры'/>
          <NavbarItem title='Поручения'/>
          <NavbarItem title='Контрагенты'/>
        </div>
      }
    </div>
  )
}