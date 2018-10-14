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
      squares: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
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
    this.setState({ squares: Array(9).fill(null) })
  }

  componentDidUpdate () {
    if (!this.state.isX) {
      setTimeout(() => {
        this.handleClick(computer(this.state.squares))
      }, 500)
    }
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
            <Cell value={this.state.squares[0]} onClick={() => this.handleClick(0)} />
            <Cell value={this.state.squares[1]} onClick={() => this.handleClick(1)} />
            <Cell value={this.state.squares[2]} onClick={() => this.handleClick(2)} />
          </div>
          <div className='row'>
            <Cell value={this.state.squares[3]} onClick={() => this.handleClick(3)} />
            <Cell value={this.state.squares[4]} onClick={() => this.handleClick(4)} />
            <Cell value={this.state.squares[5]} onClick={() => this.handleClick(5)} />
          </div>
          <div className='row'>
            <Cell value={this.state.squares[6]} onClick={() => this.handleClick(6)} />
            <Cell value={this.state.squares[7]} onClick={() => this.handleClick(7)} />
            <Cell value={this.state.squares[8]} onClick={() => this.handleClick(8)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
