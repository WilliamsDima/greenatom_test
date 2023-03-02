import { FC, memo, useState } from 'react'
import { TFilterItem } from 'src/services/types'
import Checkbox from '../Checkbox'
import './styles.scss'

type Item = {
  item: TFilterItem
  filterHandler: (value: number) => void
}

const FilterItem: FC<Item> = memo(({ item, filterHandler }) => {
  const [checked, setChecked] = useState(item.checked)

  const checkedHandler = (value: boolean) => {
    filterHandler(item.value)
    setChecked(value)
  }

  return (
    <label className="filter-item">
      <Checkbox
        alt={item.text}
        checked={checked}
        onChange={(value: boolean) => checkedHandler(value)}
      />
      <p>{item.text}</p>
    </label>
  )
})

export default FilterItem
