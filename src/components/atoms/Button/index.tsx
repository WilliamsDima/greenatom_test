import { FC, ReactNode, memo } from 'react'
import './styles.scss'

type Btn = {
  children: ReactNode
  active?: boolean
  onClick?: () => void
}

const Button: FC<Btn> = memo(({ children, active, onClick }) => {
  return (
    <button className={`${active ? 'btn active' : 'btn'}`} onClick={onClick}>
      {children}
    </button>
  )
})

export default Button
