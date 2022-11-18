export type ListItem = {
  "id": number,
  "rowName": string,
  "total": number,
  "salary": number,
  "mimExploitation": number,
  "machineOperatorSalary": number,
  "materials": number,
  "mainCosts": number,
  "supportCosts": number,
  "equipmentCosts": number,
  "overheads": number,
  "estimatedProfit": number,
  "child": StoreListItem[]
}

export type StoreListItem = ListItem & {
  isEditMode: boolean
}

export type ListItemPayload = {
  rowName: string,
  salary: number,
  equipmentCosts: number,
  overheads: number,
  estimatedProfit: number,
  machineOperatorSalary: number,
  mainCosts: number,
  materials: number,
  mimExploitation: number,
  supportCosts: number,
}