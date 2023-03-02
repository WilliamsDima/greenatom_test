import { types } from 'mobx-state-tree'

const Filter = types.model('Filter', {
  text: types.string,
  value: types.number,
  checked: types.boolean,
})

const Flight = types.model('Flight', {
  id: types.string,
  path: types.string,
  timePath: types.string,
  flightTime: types.string,
  transferCount: types.number,
  code: types.string,
})

const ListItem = types.model('ListItem', {
  id: types.string,
  price: types.number,
  companyName: types.string,
  transferCountMax: types.number,
  flights: types.array(Flight),
})

const MainStore = types
  .model('MainStore', {
    // or types.maybe(types.array(ListItem))
    data: types.optional(types.array(ListItem), []),
    filter: types.optional(types.array(Filter), []),
  })
  .actions((self) => ({
    toggle(value: number) {
      self.filter.map((it) => {
        if (it.value === value) {
          it.checked = !it.checked
        }

        return it
      })
    },
    setFilterDataByPrice(max: boolean) {
      max
        ? self.data.replace(
            self.data.sort((prev, next) => next.price - prev.price)
          )
        : self.data.replace(
            self.data.sort((prev, next) => prev.price - next.price)
          )
    },
  }))
  .views((self) => ({
    get filterList() {
      const all = !self.filter.some((it, i) => i !== 0 && it.checked)
      return all
        ? self.data
        : self.data
            .slice()
            .filter(
              (item) =>
                self.filter.find((it) => it.value === item.transferCountMax)
                  ?.checked
            )
    },
  }))

export default MainStore
