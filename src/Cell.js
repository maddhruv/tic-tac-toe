import React from 'react'

import classNames from 'classnames'

export default class Cell extends React.Component {
  render () {
    let player = null
    if (this.props.value === 'X') {
      player = 'x'
    } else if (this.props.value === '0') {
      player = 'zero'
    }
    return (
      <div className={classNames('cell', player)} onClick={this.props.onClick}>
        <p>{this.props.value}</p>
      </div>
    )
  }
}
