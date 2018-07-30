import React from 'react'

import './Timer.scss'

import Pulse from './Pulse/Pulse.jsx'

function pad (input, length) {
  input = String(input)
  while (input.length < length) input = '0' + input
  return input
}

export default class Display extends React.Component {
  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.time !== prevState.time) {
      const time = nextProps.time

      return {
        hours: pad(~~(time / (1000 * 60 * 60)), 2),
        minutes: pad(~~(time / (1000 * 60) % 60), 2),
        seconds: pad(~~(time / (1000) % 60), 2),
        milliseconds: pad(~~(time % 1000), 3)
      }
    } else return {}
  }

  constructor () {
    super()

    this.state = {}
  }

  render () {
    return (
      <div className='timer__container'>
        <Pulse className='timer__pulse' />
        <div className='timer__label fb--center fb--row'>
          <p>{this.state.hours}</p>:
          <p>{this.state.minutes}</p>:
          <p>{this.state.seconds}</p>
          <p className='timer__label--mini'>{this.state.milliseconds}</p>
        </div>
      </div>
    )
  }
}
