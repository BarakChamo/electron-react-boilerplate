import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import { Home, Counter } from './containers'
import { AppStore, CounterStore } from './stores'

import './app.global.css'

const isDev = process.env.NODE_ENV !== 'production'

const stores = {
  app: new AppStore(),
  counter: new CounterStore()
}

const App = ({ children }) => (
  <Provider {...stores}>
    {children}
  </Provider>
)

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/counter" component={Counter} />
  </Route>
)

render(
  <div>
    {isDev && <DevTools />}
    <Router history={hashHistory} routes={Routes} />
  </div>,
  document.getElementById('root')
)
