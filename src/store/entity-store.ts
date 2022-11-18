import { makeAutoObservable, toJS } from 'mobx'
import { ListItemPayload, StoreListItem } from '../types/listItem'
import { createEntity, createRowInEntity, deleteRow, getTreeRows, updateRow } from '../api/entity'
import { toStoreListEntity } from '../function/toStoreListEntity'

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
        console.log(toJS(this.list))
      })
      .catch(error => {
        this.error = error.message
        throw new Error()
      })
      .finally()
  }

  deleteRow(rID: number) {
    return deleteRow(this.eID, rID)
      .then(() => {
        this.list.filter(item => item.id === rID)
      })
      .catch(error => {
        this.error = error.message
        throw new Error()
      })
      .finally()
  }

  updateRow(listItem: ListItemPayload) {
    return updateRow(this.eID, this.rID, listItem)
      .then(res => {
        const row = this.list.find(item => item.id === this.rID)!
        console.log(this.rID)
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
      .finally()
  }

  createRowInEntity(parentId: number | null) {
    return createRowInEntity(this.eID, parentId)
      .then(res => {
        this.list.push({ ...res.data.current, isEditMode: true, child: [] })
      })
      .catch(error => {
        this.error = error.message
        throw new Error()
      })
      .finally()
  }

  createEntity() {
    return createEntity()
      .then(res => {
        this.list!.push({ ...res.data, isEditMode: true })
        this.eID = this.list[0]!.id
      })
      .catch(error => {
        this.error = error.message
        throw new Error()
      })
      .finally()
  }

  startEdit(listItem: StoreListItem) {
    this.list.forEach(item => item.isEditMode = item === listItem)
    this.rID = listItem.id
  }

}

export const entityStore = new EntityStore()