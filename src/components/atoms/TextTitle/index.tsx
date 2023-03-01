import { FC, ReactNode } from 'react'

import './styles.scss'

type Text = {
  children: ReactNode
}

const TextTitle: FC<Text> = ({ children }) => {
  return <p className="title">{children}</p>
}

export default TextTitle
