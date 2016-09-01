import React from 'react'
import { Link } from 'react-router'
import { inject, observer } from 'mobx-react'

import type { CounterStoreType } from '../types'

import styles from './counter.css'

// Counter Value Component
let CounterValue = ({ counter: { value } }: CounterStoreType) => (
  <h1>{value}</h1>
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
      <br />
      <div className={styles.button} onClick={addOne}>+1</div>
      <div className={styles.button} onClick={removeOne}>-1</div>
    </div>
  </div>
)

// Bind and export Counter Component
export default inject('counter')(observer(Counter))
