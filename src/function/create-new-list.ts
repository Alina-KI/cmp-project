import { StoreListItem } from '../types/listItem'

export const createNewList = (list: StoreListItem[], listItem: StoreListItem) => {
  const listString = JSON.stringify(list)
  const listItemString = JSON.stringify(listItem)
  const newListString = listString
    .replace(listItemString, '')
    .replace(',]', ']')
    .replace('[,', '[')
    .replace(',,', ',')
  return JSON.parse(newListString)
}