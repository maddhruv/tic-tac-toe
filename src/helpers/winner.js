import { applause } from './sounds'

export default function checkWinner (array) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (var i = 0; i < winningLines.length; i++) {
    const [x, y, z] = winningLines[i]

    if (array[x] && array[x] === array[y] && array[y] === array[z]) {
      new Audio(applause).play()
      if (array[x] === 'X') {
        return 'Player'
      } else {
        return 'Computer'
      }
    }
  }
  return null
}
