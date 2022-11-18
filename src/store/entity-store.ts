import { makeAutoObservable } from 'mobx'
import { ListItemPayload, StoreListItem } from '../types/listItem'
import { createEntity, createRowInEntity, deleteRow, getTreeRows, updateRow } from '../api/entity'
import { toStoreListEntity } from '../function/to-store-list-entity'

class EntityStore {
  constructor() {
    makeAutoObservable(this)
  }

  list: StoreListItem[] = []
  eID = 23016
  rID = 0
  error = ''


  getTreeRows() {
    return getTreeRows(this.eID)
      .then(res => {
        this.list = res.data.map(toStoreListEntity)
      })
      .catch(error => {
        this.error = error.message
        throw error
      })
  }

  deleteRow(rID: number) {
    return deleteRow(this.eID, rID)
      .then(() => {
        this.list.filter(item => item.id === rID)
      })
      .catch(error => {
        this.error = error.message
        throw error
      })
  }

  updateRow(listItem: ListItemPayload, storeListItem: StoreListItem) {
    return updateRow(this.eID, this.rID, listItem)
      .then(res => {
        const row = storeListItem
        row.isEditMode = false
        const changed = res.data.current
        row.rowName = changed.rowName
        row.salary = changed.salary
        row.equipmentCosts = changed.equipmentCosts
        row.overheads = changed.overheads
        row.estimatedProfit = changed.estimatedProfit
      })
      .catch(error => {
        this.error = error.message
        throw error
      })
  }

  createRowInEntity(parentId: number | null) {
    return createRowInEntity(this.eID, parentId)
      .then(res => {
        parentId === null ?
          this.list.push({ ...res.data.current, isEditMode: true, child: [] })
          :
          this.list.find(item => item.id === parentId)?.child.push({ ...res.data.current, isEditMode: true, child: [] })
      })
      .catch(error => {
        this.error = error.message
        throw error
      })
  }

  createEntity() {
    return createEntity()
      .then(res => {
        this.list!.push({ ...res.data, isEditMode: true })
        this.eID = this.list[0]!.id
      })
      .catch(error => {
        this.error = error.message
        throw error
      })
  }

  startEdit(selectedItem: StoreListItem) {
    this.list.forEach(item => this.setEdit(item, selectedItem))
    this.rID = selectedItem.id
  }

  setEdit(currentItem: StoreListItem, selectedItem: StoreListItem) {
    currentItem.isEditMode = currentItem === selectedItem
    currentItem.child.forEach(item => this.setEdit(item, selectedItem))
  }


}

export const entityStore = new EntityStore()