import React, { useEffect } from 'react'
import s from './table-row.module.sass'
import { StoreListItem } from '../../../types/listItem'
import { observer } from 'mobx-react-lite'
import { ReactComponent as Image } from '../../../assets/images/Folder1.svg'
import { entityStore } from '../../../store/entity-store'
import { useForm } from 'react-hook-form'
import { Input } from '../input/input'
import { normalizeNumber } from '../../../function/normalize-number'

type Props = {
  listItem: StoreListItem
}

type Inputs = {
  rowName: string
  salary: string
  equipmentCosts: string
  overheads: string
  estimatedProfit: string
}

export const TableRow = observer(({ listItem }: Props) => {
  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: { rowName: '', equipmentCosts: '', estimatedProfit: '', overheads: '', salary: '' }
  })
  useEffect(() => {
    if (!listItem.isEditMode) reset()
  }, [listItem.isEditMode])
  const onSubmit = handleSubmit((data: Inputs) => {
    const listItem = {
      rowName: data.rowName,
      salary: +data.salary,
      equipmentCosts: +data.equipmentCosts,
      overheads: +data.overheads,
      estimatedProfit: +data.estimatedProfit,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      supportCosts: 0,
    }
    return entityStore.updateRow(listItem).then()
  })
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      onSubmit().then()
    }
  }

  return (
    listItem.isEditMode
      ?
      <>
        <div className={s.tableElement}>
          <Image className={s.image}/>
        </div>
        <Input
          className={s.tableElement} onKeyDown={handleKeyDown} placeholder={listItem.rowName}
          control={control} name={'rowName'}/>
        <Input
          className={s.tableElement} onKeyDown={handleKeyDown} placeholder={listItem.salary.toString()}
          control={control} name={'salary'} normalize={normalizeNumber}/>
        <Input
          className={s.tableElement} onKeyDown={handleKeyDown} placeholder={listItem.equipmentCosts.toString()}
          control={control} name={'equipmentCosts'} normalize={normalizeNumber}/>
        <Input
          className={s.tableElement} onKeyDown={handleKeyDown} placeholder={listItem.overheads.toString()}
          control={control} name={'overheads'} normalize={normalizeNumber}/>
        <Input
          className={s.tableElement} onKeyDown={handleKeyDown} placeholder={listItem.estimatedProfit.toString()}
          control={control} name={'estimatedProfit'} normalize={normalizeNumber}/>
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