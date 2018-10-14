import React from 'react'

export default class Reset extends React.Component {
  render () {
    return (
      <div className='reset' onClick={this.props.onClick}>
        Reset
      </div>
    )
  }
}
