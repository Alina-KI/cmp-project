import React, { useState } from 'react'
import s from './navbar.module.sass'
import { ReactComponent as Arrow } from '../../../assets/images/Arrow.svg'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

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

        </div>
      }
    </div>
  )
}