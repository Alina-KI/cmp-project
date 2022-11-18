import { api } from './api'
import { RowEntity } from '../types/rowEntity'
import { ListItem } from '../types/listItem'
import { ListItemChangeInfo } from '../types/listItemChangeInfo'

export const createRowInEntity = (eID: number, parentId: number | null) =>
  api.post<ListItemChangeInfo>(
    `/v1/outlay-rows/entity/${eID}/row/create`,
    {
      parentId,
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: '',
      salary: 0,
      supportCosts: 0
    } as RowEntity
  )

export const createEntity = () => api.post<ListItem>('/v1/outlay-rows/entity/create')

export const updateRow = (eID: number, rID: number) =>
  api.post<ListItemChangeInfo>(`/v1/outlay-rows/entity/${eID}/row/${rID}/update`)

export const deleteRow = (eID: number, rID: number) =>
  api.delete<ListItemChangeInfo>(`/v1/outlay-rows/entity/${eID}/row/${rID}/delete`)

export const getTreeRows = (eID: number) =>
  api.get<ListItem[]>(`v1/outlay-rows/entity/${eID}/row/list`)