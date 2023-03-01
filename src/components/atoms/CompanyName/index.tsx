import './styles.scss'
import { FC } from 'react'
import { MdFlight } from 'react-icons/md'

type Company = {
  companyName: string
}

const CompanyName: FC<Company> = ({ companyName }) => {
  return (
    <div className="item-company">
      <div className="item-company__logo">
        <MdFlight className="logo" />
      </div>
      <h1 className="item-company__name">{companyName}</h1>
    </div>
  )
}

export default CompanyName
