import { FC, useMemo } from 'react'
import CompanyName from 'src/components/atoms/CompanyName'
import { converPrice } from 'src/hooks/helpers'
import './styles.scss'

type Header = {
  price: number
  companyName: string
}

const HeaderItem: FC<Header> = ({ price, companyName }) => {
  const converP = useMemo(() => {
    return converPrice(price)
  }, [price])
  return (
    <div className="item-header">
      <h2 className="item-price">{converP}</h2>
      <CompanyName companyName={companyName} />
    </div>
  )
}

export default HeaderItem
