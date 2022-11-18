import React from 'react'
import { TableRowInput } from '../table-row-input/table-row-input'
import { TableRow } from '../table-row/table-row'
import { StoreListItem } from '../../../types/listItem'
import { observer } from 'mobx-react-lite'

type Props = {
  listItem: StoreListItem
}

export const Table = observer(({ listItem }: Props) => {
  return (
    <>
      {
        listItem.isEditMode
          ?
          <TableRowInput listItem={listItem}/>
          :
          <TableRow listItem={listItem}/>
      }
      {listItem.child.map(item => {
        return <Table listItem={item} key={item.id}/>
      })}
    </>
  )
})