import React, { useState } from 'react'
import s from './table-row.module.sass'
import { ListEntity } from '../../../types/listEntity'
import { observer } from 'mobx-react-lite'
import { ReactComponent as Image } from '../../../assets/images/Folder1.svg'

type Props = {
  listItem: ListEntity
}

export const TableRow = observer(({ listItem }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <>
      <div className={s.tableElement}>
        <Image className={s.image}/>
      </div>
      <span className={s.tableElement}>{listItem.rowName}</span>
      <span className={s.tableElement}>{listItem.salary}</span>
      <span className={s.tableElement}>{listItem.equipmentCosts}</span>
      <span className={s.tableElement}>{listItem.overheads}</span>
      <span className={s.tableElement}>{listItem.estimatedProfit}</span>
    </>
  )
})