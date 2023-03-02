import FilterItem from 'src/components/atoms/FilterItem'
import { useMst } from 'src/hooks/useMst'
import './styles.scss'

const FilterList = () => {
  const { main } = useMst()

  const filterHandler = (value: number) => {
    // console.log('values', value)

    main.toggle(value)
  }

  return (
    <ul className="filter-params">
      {main.filter.map((item) => {
        return (
          <FilterItem
            item={item}
            key={item.value.toString()}
            filterHandler={filterHandler}
          />
        )
      })}
    </ul>
  )
}

export default FilterList
