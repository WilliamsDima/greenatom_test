import './styles.scss'
import { FC } from 'react'
import CompanyName from '../CompanyName'

type Flight = {
  top: string
  bottom: string
}

const FlightData: FC<Flight> = ({ top, bottom }) => {
  return (
    <div className="item-data">
      <p className="top">{top}</p>
      <p className="bottom">{bottom}</p>
    </div>
  )
}

export default FlightData
