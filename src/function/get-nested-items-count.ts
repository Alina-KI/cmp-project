import { StoreListItem } from '../types/listItem'

export const getNestedItemsCount = (list: StoreListItem) => {
  return list.child.reduce((acc, item) => acc + 1 + item.child.length, 0)
}