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
  "child": ListItem[]
}

export type StoreListItem = ListItem & {
  isEditMode: boolean
}
