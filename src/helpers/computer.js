export default function computer (squares) {
  let emptyCells = []
  for (var i in squares) {
    if (!squares[i]) {
      emptyCells.push(i)
    }
  }
  const move = emptyCells[Math.floor(Math.random() * (emptyCells.length - 1))]
  return move
}
