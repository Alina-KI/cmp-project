import React from 'react'
import s from './block-icon-line.module.sass'
import { ReactComponent as Folder1 } from '../../../assets/images/Folder1.svg'
import { getNestedItemsCount } from '../../../function/get-nested-items-count'
import { ReactComponent as Folder2 } from '../../../assets/images/Folder2.svg'
import { ReactComponent as File } from '../../../assets/images/ListIcon.svg'
import { StoreListItem } from '../../../types/listItem'
import { observer } from 'mobx-react-lite'

type Props = {
  nestingLevel: number
  listItem: StoreListItem
}

export const BlockIconLine = observer(({listItem, nestingLevel}: Props) => {
  return (
    <div className={s.block}>
      {
        nestingLevel === 1
          ?
          <div className={s.blockWithLine}>
            <Folder1 className={s.icon} style={{ marginLeft: '  2px' }}/>
            <div className={s.verticalLine} style={{ height: `${60 * getNestedItemsCount(listItem) - 7}px` }}/>
          </div>
          : nestingLevel === 2
            ?
            <div className={s.blockWithLine}>
              <Folder2 className={s.icon} style={{ marginLeft: '26px' }}/>
              <div className={s.verticalLine} style={{ height: `${60 * getNestedItemsCount(listItem) - 7}px` }}/>
              <div className={s.horizontalLine}/>
            </div>
            :
            <div className={s.blockWithLine}>
              <File className={s.icon} style={{ marginLeft: '50px' }}/>
              <div className={s.horizontalLine} style={{right: '19px'}}/>
            </div>
      }
    </div>
  )
})