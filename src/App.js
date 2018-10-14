import React, { Component } from 'react'

import Cell from './Cell'
import Reset from './reset'

import checkWinner from './helpers/winner'
import computer from './helpers/computer'
import { tap } from './helpers/sounds'

import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      squares: Array(16).fill(null),
      isX: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleClick (i) {
    new Audio(tap).play()

    const squares = this.state.squares.slice()

    if (checkWinner(this.state.squares) || squares[i]) {
      return
    }

    squares[i] = this.state.isX ? 'X' : '0'
    this.setState({
      squares: squares,
      isX: !this.state.isX
    })
  }

  reset () {
    this.setState({ squares: Array(16).fill(null) })
  }

  componentDidUpdate () {
    if (!this.state.isX) {
      setTimeout(() => {
        this.handleClick(computer(this.state.squares))
      }, 500)
    }
  }

  renderCell (i) {
    return (
      <Cell value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    )
  }

  render () {
    let status = `${this.state.isX ? 'X' : '0'}'s turn`
    let winner = checkWinner(this.state.squares)
    if (winner) {
      status = `${winner} won`
    }
    return (
      <div className='game'>
        <h1 className='title'>
          Tic Tac @ Hiver
        </h1>
        <div className='status'>
          {status}
        </div>
        <Reset onClick={this.reset} />
        <div className='App'>
          <div className='row'>
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
          </div>
          <div className='row'>
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
          </div>
          <div className='row'>
            {this.renderCell(8)}
            {this.renderCell(9)}
            {this.renderCell(10)}
            {this.renderCell(11)}
          </div>
          <div className='row'>
            {this.renderCell(12)}
            {this.renderCell(13)}
            {this.renderCell(14)}
            {this.renderCell(15)}
          </div>
        </div>
      </div>
    )
  }
}

export default App
