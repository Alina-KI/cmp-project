import React from 'react'
import s from './table-row.module.sass'
import { StoreListItem } from '../../../types/listItem'
import { observer } from 'mobx-react-lite'
import { ReactComponent as Folder1 } from '../../../assets/images/Folder1.svg'
import { ReactComponent as Folder2 } from '../../../assets/images/Folder2.svg'
import { ReactComponent as File } from '../../../assets/images/ListIcon.svg'
import { ReactComponent as Delete } from '../../../assets/images/TrashFill.svg'
import { entityStore } from '../../../store/entity-store'

type Props = {
  listItem: StoreListItem
}

export const TableRow = observer(({ listItem }: Props) => {
  return (
    <>
      <div className={s.tableElement}>
        <div className={s.block}>
          <Folder1 className={s.image}/>
        </div>
        <div className={s.showBlock}>
          <button className={s.iconButton} onClick={() => entityStore.createRowInEntity(null)}>
            <Folder1 className={s.image}/>
          </button>
          <button className={s.iconButton} onClick={() => entityStore.createRowInEntity(listItem.id)}>
            <Folder2 className={s.image}/>
          </button>
          <button className={s.iconButton} onClick={() => entityStore.createRowInEntity(listItem.id)}>
            <File className={s.image}/>
          </button>
          <button className={s.iconButton} onClick={() => entityStore.deleteRow(listItem.id)}>
            <Delete className={s.delete}/>
          </button>
        </div>
      </div>
      <span className={s.tableElement} onDoubleClick={() => entityStore.startEdit(listItem)}>
        {listItem.rowName}
      </span>
      <span className={s.tableElement} onDoubleClick={() => entityStore.startEdit(listItem)}>
        {listItem.salary}
      </span>
      <span className={s.tableElement} onDoubleClick={() => entityStore.startEdit(listItem)}>
        {listItem.equipmentCosts}
      </span>
      <span className={s.tableElement} onDoubleClick={() => entityStore.startEdit(listItem)}>
        {listItem.overheads}
      </span>
      <span className={s.tableElement} onDoubleClick={() => entityStore.startEdit(listItem)}>
        {listItem.estimatedProfit.toString().replace('.', ',')}
      </span>
    </>
  )
})