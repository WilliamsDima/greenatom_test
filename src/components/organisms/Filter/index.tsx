import TextTitle from 'src/components/atoms/TextTitle'
import FilterList from 'src/components/molecules/FilterList'
import './styles.scss'

const Filter = () => {
  return (
    <aside className="filter">
      <TextTitle>количество пересадок</TextTitle>
      <FilterList />
    </aside>
  )
}

export default Filter
