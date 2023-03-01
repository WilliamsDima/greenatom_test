import './styles.scss'
import { FC } from 'react'
import { IFlight } from 'src/services/types'
import FlightData from 'src/components/atoms/FlightData'

type Flight = {
  flight: IFlight
}

const FlightInfo: FC<Flight> = ({ flight }) => {
  return (
    <div className="item-info">
      <FlightData top={flight.path} bottom={flight.timePath} />
      <FlightData top={'в пути'} bottom={flight.flightTime} />
      <FlightData top={flight.transferCount} bottom={flight.code} />
    </div>
  )
}

export default FlightInfo
