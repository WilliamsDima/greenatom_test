export type TFilterItem = {
  text: string
  value: number
  checked: boolean
}

export interface IFlight {
  id: string
  path: string
  timePath: string
  flightTime: string
  transferCount: number
  code: string
}

export interface IItem {
  id: string
  price: number
  companyName: string
  transferCountMax: number
  flights: IFlight[]
}

export interface IList {
  items: IItem[]
}
