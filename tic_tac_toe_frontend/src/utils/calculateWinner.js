const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * Calculates the winner for a Tic Tac Toe board and returns both the winner and the winning line.
 * @param {Array<('X'|'O'|null)>} squares - Array of 9 entries representing board state
 * @returns {{ winner: ('X'|'O'|null), line: number[] }} - Winner and winning line indices
 */
// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: [] };
}
