import { FC, memo, useState } from 'react'
import { TFilterItem } from 'src/services/types'
import Checkbox from '../Checkbox'
import './styles.scss'

type Item = {
  item: TFilterItem
}

const FilterItem: FC<Item> = memo(({ item }) => {
  const [checked, setChecked] = useState(item.checked)

  return (
    <label className="filter-item">
      <Checkbox alt={item.value} checked={checked} onChange={setChecked} />
      <p>{item.text}</p>
    </label>
  )
})

export default FilterItem
