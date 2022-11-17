import React from 'react'
import s from './cmp.module.sass'

export const CMP = () => {
  return (
    <div className={s.table}>
      <span className={ s.tableHeaderElement }>Уровень</span>
      <span className={ s.tableHeaderElement }>Наименование работ</span>
      <span className={ s.tableHeaderElement }>Основная з/п</span>
      <span className={ s.tableHeaderElement }>Оборудование</span>
      <span className={ s.tableHeaderElement }>Накладные расходы</span>
      <span className={ s.tableHeaderElement }>Сметная прибыль</span>
      {/*{users.map(user => <TableElements user={user} key={user.id}/>)}*/}
    </div>
  )
}