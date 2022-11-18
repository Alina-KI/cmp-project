import React from 'react'
import s from './cmp.module.sass'
import { entityStore } from '../../../store/entity-store'
import { observer } from 'mobx-react-lite'
import { Table } from '../../ui/table/table'

export const CMP = observer(() => {

  return (
    <div className={s.table}>
      <span className={`${s.tableHeaderElement} ${s.tableLeftElement}`}>Уровень</span>
      <span className={s.tableHeaderElement}>Наименование работ</span>
      <span className={s.tableHeaderElement}>Основная з/п</span>
      <span className={s.tableHeaderElement}>Оборудование</span>
      <span className={s.tableHeaderElement}>Накладные расходы</span>
      <span className={`${s.tableHeaderElement} ${s.tableRightElement}`}>Сметная прибыль</span>
      {entityStore.list!.map(listItem => <Table listItem={listItem} key={listItem.id}/>)}
    </div>
  )
})