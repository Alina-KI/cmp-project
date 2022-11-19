import React, { useEffect } from 'react'
import s from './table-row-input.module.sass'
import { observer } from 'mobx-react-lite'
import { ReactComponent as Folder1 } from '../../../assets/images/Folder1.svg'
import { ReactComponent as Folder2 } from '../../../assets/images/Folder2.svg'
import { ReactComponent as File } from '../../../assets/images/ListIcon.svg'
import { entityStore } from '../../../store/entity-store'
import { useForm } from 'react-hook-form'
import { Input } from '../input/input'
import { normalizeNumber } from '../../../function/normalize-number'
import { TableProps } from '../../../types/table-props'

type Inputs = {
  rowName: string
  salary: string
  equipmentCosts: string
  overheads: string
  estimatedProfit: string
}

export const TableRowInput = observer(({ listItem, nestingLevel }: TableProps) => {
  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: { rowName: '', equipmentCosts: '', estimatedProfit: '', overheads: '', salary: '' }
  })
  useEffect(() => {
    if (!listItem.isEditMode) reset()
  }, [listItem.isEditMode])
  const onSubmit = handleSubmit((data: Inputs) => {
    const listItemPayload = {
      rowName: data.rowName,
      salary: +(data.salary.replace(',', '.')),
      equipmentCosts: +(data.equipmentCosts.replace(',', '.')),
      overheads: +(data.overheads.replace(',', '.')),
      estimatedProfit: +(data.estimatedProfit.replace(',', '.')),
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      supportCosts: 0,
    }
    return entityStore.updateRow(listItemPayload, listItem).then()
  })
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      onSubmit().then()
    }
  }

  return (
    <>
      <div className={s.tableElement}>
        {
          nestingLevel === 1
            ? <Folder1 className={s.icon} style={{ marginLeft: '4px' }}/>
            : nestingLevel === 2
              ? <Folder2 className={s.icon} style={{ marginLeft: '31px' }}/>
              : <File className={s.icon} style={{ marginLeft: '57px' }}/>
        }
      </div>
      <div className={s.tableElement}>
        <Input autoFocus={true}
          onKeyDown={handleKeyDown} placeholder={listItem.rowName}
          control={control} name={'rowName'}/>
      </div>
      <div className={s.tableElement}>
        <Input
          onKeyDown={handleKeyDown} placeholder={listItem.salary.toString()}
          control={control} name={'salary'} normalize={normalizeNumber}/>
      </div>
      <div className={s.tableElement}>
        <Input
          onKeyDown={handleKeyDown} placeholder={listItem.equipmentCosts.toString()}
          control={control} name={'equipmentCosts'} normalize={normalizeNumber}/>
      </div>
      <div className={s.tableElement}>
        <Input
          onKeyDown={handleKeyDown} placeholder={listItem.overheads.toString()}
          control={control} name={'overheads'} normalize={normalizeNumber}/>
      </div>
      <div className={s.tableElement}>
        <Input
          onKeyDown={handleKeyDown} placeholder={listItem.estimatedProfit.toString()}
          control={control} name={'estimatedProfit'} normalize={normalizeNumber}/>
      </div>
    </>
  )
})