import React from 'react'
import s from './cmp.module.sass'
import { entityStore } from '../../../store/entity-store'
import { observer } from 'mobx-react-lite'
import { TableRow } from '../../ui/table-row/table-row'

export const CMP = observer(() => {

  return (
    <div className={s.cmp}>
      <div className={s.title}>
        <span className={s.text}>Строительно-монтажные работы</span>
      </div>
      <div className={s.table}>
        <span className={`${s.tableHeaderElement} ${s.tableLeftElement}`}>Уровень</span>
        <span className={s.tableHeaderElement}>Наименование работ</span>
        <span className={s.tableHeaderElement}>Основная з/п</span>
        <span className={s.tableHeaderElement}>Оборудование</span>
        <span className={s.tableHeaderElement}>Накладные расходы</span>
        <span className={`${s.tableHeaderElement} ${s.tableRightElement}`}>Сметная прибыль</span>
        {entityStore.list!.map(listItem => <TableRow listItem={listItem} key={listItem.id} nestingLevel={1}/>)}
      </div>
    </div>
  )
})