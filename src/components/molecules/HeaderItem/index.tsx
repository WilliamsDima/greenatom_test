import { FC } from 'react'
import CompanyName from 'src/components/atoms/CompanyName'
import './styles.scss'

type Header = {
  price: string
  companyName: string
}

const HeaderItem: FC<Header> = ({ price, companyName }) => {
  return (
    <div className="item-header">
      <h2 className="item-price">{price}</h2>
      <CompanyName companyName={companyName} />
    </div>
  )
}

export default HeaderItem
