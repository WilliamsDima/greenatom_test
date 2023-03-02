import { useEffect, useState, memo } from 'react'
import Button from 'src/components/atoms/Button'
import { useMst } from 'src/hooks/useMst'
import './styles.scss'

const BtnsGrup = memo(() => {
  const [active, setActive] = useState<null | string>(null)

  const { main } = useMst()

  const filterHandler = (value: string) => {
    setActive(value)

    if (value === 'cheap') main.setFilterDataByPrice(false)
    else main.setFilterDataByPrice(true)
  }

  useEffect(() => {
    filterHandler('cheap')
  }, [])

  return (
    <div className="btns">
      <Button
        onClick={() => filterHandler('cheap')}
        active={active === 'cheap'}
      >
        самый дешевый
      </Button>
      <Button onClick={() => filterHandler('fast')} active={active === 'fast'}>
        самый бысрый
      </Button>
    </div>
  )
})

export default BtnsGrup
