import React from 'react'
import s from './navbar-item.module.sass'
import {ReactComponent as NavbarIcon} from '../../../assets/images/NavbarIcon.svg'

type Props = {
  title: string
  isSelect?: boolean
}

export const NavbarItem = ({title, isSelect}: Props) => {
  return (
    <a href='#' className={`${ s.navbarItem } ${isSelect && `${s.selectNavbarItem}`}`}>
      <NavbarIcon className={s.icon}/>
      <span className={s.title}>{title}</span>
    </a>
  )
}