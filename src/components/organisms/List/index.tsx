import { listData } from 'src/api/listData'
import ListItem from 'src/components/molecules/ListItem'
import './styles.scss'

const List = () => {
  return (
    <ul className="main-list">
      {listData.map((item) => {
        return <ListItem item={item} key={item.id} />
      })}
    </ul>
  )
}

export default List
