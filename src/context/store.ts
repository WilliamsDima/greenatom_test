import { RootInstance } from './../stores/index'
import { createContext } from 'react'
export const RootStoreContext = createContext<null | RootInstance>(null)

export const Provider = RootStoreContext.Provider
