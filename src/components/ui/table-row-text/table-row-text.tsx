import React from 'react'
import s from './table-row-text.module.sass'
import { observer } from 'mobx-react-lite'
import { ReactComponent as Folder1 } from '../../../assets/images/Folder1.svg'
import { ReactComponent as Folder2 } from '../../../assets/images/Folder2.svg'
import { ReactComponent as File } from '../../../assets/images/ListIcon.svg'
import { ReactComponent as Delete } from '../../../assets/images/TrashFill.svg'
import { entityStore } from '../../../store/entity-store'
import { TableProps } from '../../../types/table-props'
import { BlockIconLine } from '../block-icon-line/block-icon-line'

export const TableRowText = observer(({ listItem, nestingLevel, parent }: TableProps) => {
  return (
    <>
      <div className={s.tableElement}>
        <BlockIconLine listItem={listItem} nestingLevel={nestingLevel}/>
        <div className={s.showBlock}>
          {nestingLevel === 1 &&
          <button className={s.iconButton} onClick={() => entityStore.createRowInEntity(null)}>
            <Folder1 className={s.icon}/>
          </button>
          }
          {(nestingLevel >= 1 && nestingLevel < 3) &&
          <button className={s.iconButton}
                  onClick={() => entityStore.createRowInEntity(parent ? parent.id : listItem.id)}>
            <Folder2 className={s.icon}/>
          </button>
          }
          <button className={s.iconButton} onClick={() => entityStore.createRowInEntity(listItem.id)}>
            <File className={s.icon}/>
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