import { observable, action } from 'mobx'

export default class CounterStore {
  @observable value = 0

  @action resetCounter = () => {
    this.value = 0
  }

  @action addOne = () => {
    this.value ++
  }

  @action removeOne = () => {
    this.value --
  }
}
