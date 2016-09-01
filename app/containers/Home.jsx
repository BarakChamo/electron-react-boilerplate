import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { inject, observer } from 'mobx-react'

import styles from './home.css'

// Name input
let NameInput = ({ app: { name, setName } }) => (
  <input className={styles.input} placeholder="lovely person" value={name} onChange={setName} />
)

NameInput.propTypes = {
  app: PropTypes.object
}

// Bind Counter Value
NameInput = inject('app')(observer(NameInput))

// Home component
const Home = () => (
  <div>
    Home
    <p><Link to="/counter">Go To Counter</Link></p>

    <h3 className={styles.name}>Hello, <NameInput /></h3>
  </div>
)

export default Home
