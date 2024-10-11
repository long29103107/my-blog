export default interface Operation {
  id: number
  label: string
  currentStatus: boolean
  overridedStatus: boolean
  operationList: Array<Operation>
}
