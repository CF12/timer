import React from 'react'

import './Pulse.scss'

export default class Pulse extends React.Component {
  render () {
    return (
      <div className='pulse__container fb--center'>
        <div className='pulse' />
      </div>
    )
  }
}
