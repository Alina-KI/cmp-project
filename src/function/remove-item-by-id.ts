import { StoreListItem } from '../types/listItem'

export const removeItemById = (list: StoreListItem[], id: number) => {
  const index = list.findIndex(item => item.id === id)
  if (index !== -1) {
    list.splice(index, 1)
    return true
  }
  for (const item of list) {
    const isDeleted = removeItemById(item.child, id)
    if (isDeleted)
      return
  }
}