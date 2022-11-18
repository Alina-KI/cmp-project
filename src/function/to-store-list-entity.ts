import { ListItem, StoreListItem } from '../types/listItem'

export const toStoreListEntity = (listEntity: ListItem): StoreListItem => ({
  ...listEntity,
  isEditMode: false

})