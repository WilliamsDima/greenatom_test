import { IItem } from './../services/types'
export const converPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price) + ' Р'
}

export const filterByPrice = (data: IItem[]) => {
  return data.sort(
    (itemCurrent, itemNext) => itemCurrent.price - itemNext.price
  )
}
