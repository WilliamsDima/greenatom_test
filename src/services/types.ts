export type TFilterItem = {
  text: string
  value: string
  checked: boolean
}

export interface IFlight {
  path: string
  timePath: string
  flightTime: string
  transferCount: string
  code: string
}

export interface IItem {
  id: string
  price: string
  companyName: string
  flights: IFlight[]
}

export interface IList {
  items: IItem[]
}
