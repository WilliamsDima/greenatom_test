import { useContext } from 'react'
import { RootStoreContext } from 'src/context/store'

export function useMst() {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}
