import { observable, action } from 'mobx'

export default class AppStore {
  @observable name = ''

  @action setName = ({ target: { value } }: { target: { value: string } }) => {
    this.name = value
  }
}
