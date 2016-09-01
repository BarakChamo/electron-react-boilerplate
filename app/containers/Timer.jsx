import React from 'react'
import { Link } from 'react-router'
import { inject, observer } from 'mobx-react'

import type { CounterStoreType } from '../types'

// Counter Value Component
let CounterValue = ({ counter: { value } }: CounterStoreType) => (
  <span>{value}</span>
)

// Bind Counter Value
CounterValue = inject('counter')(observer(CounterValue))


// Counter Component
const Counter = ({ counter: { addOne, removeOne } }: CounterStoreType) => (
  <div>
    Counter
    <p><Link to="/">Go Back</Link></p>
    <div>
      <CounterValue />

      <span onClick={addOne}>Add One</span>
      <span onClick={removeOne}>Remove One</span>
    </div>
  </div>
)

// Bind and export Counter Component
export default inject('counter')(observer(Counter))
