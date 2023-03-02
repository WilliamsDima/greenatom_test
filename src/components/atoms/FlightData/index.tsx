import './styles.scss'
import { FC } from 'react'

type Flight = {
  top: string | number
  bottom: string | number
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
