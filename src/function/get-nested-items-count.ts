import { StoreListItem } from '../types/listItem'

export const getNestedItemsCount = (list: StoreListItem) => {
  return list.child.reduce((acc, item, idItem) => {
    if (idItem === list.child.length - 1){
      return acc + 1
    }
    return acc + 1 + item.child.length
  }, 0)
}