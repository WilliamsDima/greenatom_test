import BtnsGrup from 'src/components/molecules/BtnsGrup'
import Filter from 'src/components/organisms/Filter'
import List from 'src/components/organisms/List'
import './styles.scss'

const HomeTemplate = () => {
  return (
    <main className="main">
      <Filter />

      <div className="content">
        <BtnsGrup />

        <List />
      </div>
    </main>
  )
}

export default HomeTemplate
