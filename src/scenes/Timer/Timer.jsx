import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Home.scss'

import Input from './Input/TimerInput.jsx'
import Display from './Display/Timer.jsx'

const Button = (props) => {
  return (
    <div className='home__button fb--center fb--column'>
      <p>{props.name}</p>
      <FontAwesomeIcon icon={['fas', props.icon]} />
    </div>
  )
}

export default class Timer extends React.Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.tick = this.tick.bind(this)

    this.state = {
      time: 0,
      endTime: 0,
      running: false,
      timer: undefined
    }
  }

  onSubmit (data) {
    this.startTimer(data)
  }

  startTimer (data) {
    let time = 0

    time += data.seconds * 1000
    time += data.minutes * 1000 * 60
    time += data.hours * 1000 * 60 * 60

    this.setState({
      time: time,
      endTime: Date.now() + time,
      running: true,
      timer: setInterval(() => {
        this.tick()
        if (this.state.time <= 0) this.stopTimer()
      }, 1)
    })
  }

  stopTimer () {
    clearInterval(this.state.timer)
    this.setState({
      time: 0,
      endTimer: 0,
      timer: undefined
    })
  }

  tick () {
    this.setState({
      time: this.state.endTime - Date.now()
    })
  }

  render () {
    return (
      <div className='home__container fb--center fb--column'>
        <h1 className='home__title'>clock.cf12</h1>

        <div className='home__timer-container fb--center'>
          {
            (this.state.running)
              ? <Display time={this.state.time} />
              : <Input onSubmit={this.onSubmit} />
          }
        </div>

        <span className='fb--center'>
          <Button name='Timer' icon='hourglass-start' />
        </span>
      </div>
    )
  }
}
