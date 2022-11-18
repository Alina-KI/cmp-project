import React from 'react'
import { TableRowInput } from '../table-row-input/table-row-input'
import { TableRowText } from '../table-row-text/table-row-text'
import { observer } from 'mobx-react-lite'
import { TableProps } from '../../../types/table-props'

export const TableRow = observer(({ listItem, numberImage }: TableProps) => {
  return (
    <>
      {
        listItem.isEditMode
          ?
          <TableRowInput listItem={listItem} numberImage={numberImage}/>
          :
          <TableRowText listItem={listItem} numberImage={numberImage}/>
      }
      {listItem.child.map(item => {
        return <TableRow listItem={item} key={item.id} numberImage={numberImage+1}/>
      })}
    </>
  )
})