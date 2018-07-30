import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Home.scss'

import Timer from './Timer/Timer.jsx'

const Button = (props) => {
  return (
    <div className='home__button fb--center fb--column'>
      <p>{props.name}</p>
      <FontAwesomeIcon icon={['fas', props.icon]} />
    </div>
  )
}

export default class Home extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='home__container fb--center fb--column'>
        <h1 className='home__title'>clock.cf12</h1>

        <Timer />

        <span className='fb--center'>
          <Button name='Timer' icon='hourglass-start' />
        </span>
      </div>
    )
  }
}
