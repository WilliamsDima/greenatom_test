import { types, Instance } from 'mobx-state-tree'
import MainStore from './MainStore'
import { createContext } from 'react'
import { listData } from 'src/api/listData'
import { paramsFilter } from 'src/api/data'

const RootStore = types
  .model('RootStore', {
    main: MainStore,
  })
  .create({
    main: {
      data: listData,
      filter: paramsFilter,
    },
  })

export type RootInstance = Instance<typeof RootStore>
export const RootStoreContext = createContext<null | RootInstance>(null)

export const Provider = RootStoreContext.Provider

export default RootStore
