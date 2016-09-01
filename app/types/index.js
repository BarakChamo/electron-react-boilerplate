/*
  Store Types
*/

export type CounterStoreType = {
  counter: {
    addOne?: () => void,
    removeOne?: () => void,
    value?: number
  }
}
