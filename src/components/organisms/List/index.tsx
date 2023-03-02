import ListItem from 'src/components/molecules/ListItem'
import { useMst } from 'src/hooks/useMst'
import { observer } from 'mobx-react'
import './styles.scss'

const List = observer(() => {
  const { main } = useMst()
  return (
    <ul className="main-list">
      {main.filterList.map((item) => {
        return <ListItem item={item} key={item.id} />
      })}
    </ul>
  )
})

export default List
