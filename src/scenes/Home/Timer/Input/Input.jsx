import React from 'react'

import './Input.scss'

export default class Input extends React.Component {
  constructor (props) {
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)

    this.state = {
      time: [0, 0, 0, 0, 0, 0]
    }
  }

  handleKeyDown (e) {
    e.preventDefault()

    let time = this.state.time

    if (e.key === 'Backspace') {
      if (e.target.name === 'seconds') time.pop()
      else if (e.target.name === 'minutes') time.splice(3, 1)
      else if (e.target.name === 'hours') time.splice(1, 1)

      time.unshift(0)
    } else if ((isNaN(e.key)) || time[0] !== 0) {
      return
    } else {
      if (e.target.name === 'seconds') time[time.length] = e.key
      else if (e.target.name === 'minutes') time.splice(4, 0, e.key)
      else if (e.target.name === 'hours') time.splice(2, 0, e.key)

      time.shift()
    }

    this.setState({
      time: time
    })
  }

  handleFocus (e) {
    e.target.select()
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.onSubmit({
      hours: parseInt(this.state.time.slice(0, 2).join('')),
      minutes: parseInt(this.state.time.slice(2, 4).join('')),
      seconds: parseInt(this.state.time.slice(4, 6).join(''))
    })
  }

  render () {
    return (
      <div>
        <form className='timer-input__container fb--center fb--column' onSubmit={this.onSubmit}>
          <div className='timer-input__fields fb--center'>
            <input
              name='hours'
              value={this.state.time.slice(0, 2).join('')}
              onClick={this.handleFocus}
              onKeyDown={this.handleKeyDown}
              onPaste={(e) => e.preventDefault()}
              readOnly />
            <p>:</p>
            <input
              name='minutes'
              value={this.state.time.slice(2, 4).join('')}
              onClick={this.handleFocus}
              onKeyDown={this.handleKeyDown}
              onPaste={(e) => e.preventDefault()}
              readOnly />
            <p>:</p>
            <input
              name='seconds'
              value={this.state.time.slice(4, 6).join('')}
              onClick={this.handleFocus}
              onKeyDown={this.handleKeyDown}
              onPaste={(e) => e.preventDefault()}
              readOnly />
          </div>
          <button className='timer-input__button'>START</button>
        </form>
      </div>
    )
  }
}
