import React from 'react'
import { TableRowInput } from '../table-row-input/table-row-input'
import { TableRowText } from '../table-row-text/table-row-text'
import { observer } from 'mobx-react-lite'
import { TableProps } from '../../../types/table-props'

export const TableRow = observer(({ listItem, nestingLevel }: TableProps) => {
  return (
    <>
      {
        listItem.isEditMode
          ?
          <TableRowInput listItem={listItem} nestingLevel={nestingLevel}/>
          :
          <TableRowText listItem={listItem} nestingLevel={nestingLevel}/>
      }
      {listItem.child.map(item => {
        return <TableRow listItem={item} key={item.id} nestingLevel={nestingLevel+1}/>
      })}
    </>
  )
})