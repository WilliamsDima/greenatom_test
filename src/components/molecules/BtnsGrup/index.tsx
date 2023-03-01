import { useState } from 'react'
import Button from 'src/components/atoms/Button'
import './styles.scss'

const BtnsGrup = () => {
  const [active, setActive] = useState('cheap')

  return (
    <div className="btns">
      <Button onClick={() => setActive('cheap')} active={active === 'cheap'}>
        самый дешевый
      </Button>
      <Button onClick={() => setActive('fast')} active={active === 'fast'}>
        самый бысрый
      </Button>
    </div>
  )
}

export default BtnsGrup
