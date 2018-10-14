import { applause } from './sounds'

export default function checkWinner (array) {
  const winningLines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ]

  for (var i = 0; i < winningLines.length; i++) {
    const [w, x, y, z] = winningLines[i]

    if (array[w] && array[w] === array[x] && array[x] === array[y] && array[y] === array[z]) {
      new Audio(applause).play()
      if (array[w] === 'X') {
        return 'Player'
      } else {
        return 'Computer'
      }
    }
  }
  return null
}
