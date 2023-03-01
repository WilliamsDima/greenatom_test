import { ReactNode, FC } from 'react'
import Header from 'src/components/organisms/Header'
import './styles.scss'

type Layout = {
  children: ReactNode
}

const Layout: FC<Layout> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  )
}

export default Layout
