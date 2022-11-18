import React from 'react'
import s from './table-row-text.module.sass'
import { observer } from 'mobx-react-lite'
import { ReactComponent as Folder1 } from '../../../assets/images/Folder1.svg'
import { ReactComponent as Folder2 } from '../../../assets/images/Folder2.svg'
import { ReactComponent as File } from '../../../assets/images/ListIcon.svg'
import { ReactComponent as Delete } from '../../../assets/images/TrashFill.svg'
import { entityStore } from '../../../store/entity-store'
import { TableProps } from '../../../types/table-props'

export const TableRowText = observer(({ listItem, numberImage }: TableProps) => {
  return (
    <>
      <div className={s.tableElement}>
        <div className={s.block}>
          {
            numberImage === 1 ?
              <Folder1 className={s.image}/>
              :
              numberImage === 2 ?
                <Folder2 className={s.image} style={{marginLeft: '30px'}}/>
                :
                <File className={s.image} style={{marginLeft: '50px'}}/>
          }
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
          <button className={s.iconButton} onClick={() => entityStore.deleteRow(listItem)}>
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