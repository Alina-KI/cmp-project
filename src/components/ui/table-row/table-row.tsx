import React from 'react'
import s from './table-row.module.sass'
import { StoreListItem } from '../../../types/listItem'
import { observer } from 'mobx-react-lite'
import { ReactComponent as Image } from '../../../assets/images/Folder1.svg'
import { entityStore } from '../../../store/entity-store'

type Props = {
  listItem: StoreListItem
}

export const TableRow = observer(({ listItem }: Props) => {

  return (
    listItem.isEditMode
      ?
      <>
        <div className={s.tableElement} onDoubleClick={() => entityStore.startEdit(listItem)}>
          <Image className={s.image}/>
        </div>
        <input
          className={`${s.tableElement} ${s.inputElement}`} onDoubleClick={() => entityStore.startEdit(listItem)}
          placeholder={listItem.rowName}
        />
        <input
          className={`${s.tableElement} ${s.inputElement}`} onDoubleClick={() => entityStore.startEdit(listItem)}
          placeholder={listItem.salary.toString()}
        />
        <input
          className={`${s.tableElement} ${s.inputElement}`} onDoubleClick={() => entityStore.startEdit(listItem)}
          placeholder={listItem.equipmentCosts.toString()}
        />
        <input
          className={`${s.tableElement} ${s.inputElement}`} onDoubleClick={() => entityStore.startEdit(listItem)}
          placeholder={listItem.overheads.toString()}
        />
        <input
          className={`${s.tableElement} ${s.inputElement}`} onDoubleClick={() => entityStore.startEdit(listItem)}
          placeholder={listItem.estimatedProfit.toString().replace('.', ',')}
        />
      </>
      :
      <>
        <div className={s.tableElement} onDoubleClick={() => entityStore.startEdit(listItem)}>
          <Image className={s.image}/>
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