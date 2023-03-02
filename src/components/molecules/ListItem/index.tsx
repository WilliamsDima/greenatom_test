import { memo, FC } from 'react'
import { IItem } from 'src/services/types'
import FlightInfo from '../FlightInfo'
import HeaderItem from '../HeaderItem'
import './styles.scss'

type Item = {
  item: IItem
}

const ListItem: FC<Item> = memo(({ item }) => {
  return (
    <li className="list-item">
      <HeaderItem companyName={item.companyName} price={item.price} />
      {item?.flights?.map((f) => {
        return <FlightInfo flight={f} key={f.id} />
      })}
    </li>
  )
})

export default ListItem
