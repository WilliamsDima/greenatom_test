import './styles.scss'
import { MdDone } from 'react-icons/md'
import { FC } from 'react'

interface ICheckbox {
  alt: string
  checked: boolean
  onChange?: (value: boolean) => void
}

const Checkbox: FC<ICheckbox> = ({ alt, checked, onChange }) => {
  const onChangeHandler = () => {
    onChange && onChange(!checked)
  }

  return (
    <div className="checkbox-input">
      <input
        type={'checkbox'}
        alt={alt}
        checked={checked}
        onChange={onChangeHandler}
      />
      <MdDone className="icon-done" />
    </div>
  )
}

export default Checkbox
