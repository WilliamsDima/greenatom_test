import FilterItem from 'src/components/atoms/FilterItem'
import { paramsFilter } from './data'
import './styles.scss'

const FilterList = () => {
  return (
    <ul className="filter-params">
      {paramsFilter.map((item) => {
        return <FilterItem item={item} key={item.value} />
      })}
    </ul>
  )
}

export default FilterList
