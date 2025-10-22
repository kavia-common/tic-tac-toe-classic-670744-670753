import React, { useMemo, useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../utils/calculateWinner';

/**
 * Game is the container component orchestrating the Tic Tac Toe game.
 * It manages game state (squares, current player, game over), renders the board,
 * shows player indicators, status, and provides reset functionality.
 */
// PUBLIC_INTERFACE
export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Derive winner and line using a memoized calculation
  const { winner, line } = useMemo(() => calculateWinner(squares), [squares]);

  const isBoardFull = useMemo(() => squares.every(Boolean), [squares]);
  const isDraw = !winner && isBoardFull;

  const currentPlayer = xIsNext ? 'X' : 'O';

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? "It's a draw!"
      : `Next turn: ${currentPlayer}`;

  const handleSquareClick = (index) => {
    // Guard against clicking on filled cells or after game end
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[index] = currentPlayer;
    setSquares(nextSquares);
    setXIsNext((prev) => !prev);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game-container" role="application" aria-label="Tic Tac Toe Game">
      <header className="game-header">
        <h1 className="title">Tic Tac Toe</h1>
        <p className="subtitle">Two Players • Local</p>
      </header>

      <section className="indicators" aria-label="Player turn indicators">
        <div
          className={`player-chip ${xIsNext ? 'active' : ''}`}
          aria-current={xIsNext ? 'true' : 'false'}
          aria-label="Player X"
        >
          <span className="chip-symbol">X</span>
          <span className="chip-label">Player X</span>
        </div>
        <div
          className={`player-chip ${!xIsNext ? 'active' : ''}`}
          aria-current={!xIsNext ? 'true' : 'false'}
          aria-label="Player O"
        >
          <span className="chip-symbol o">O</span>
          <span className="chip-label">Player O</span>
        </div>
      </section>

      <main className="board-wrapper" aria-live="polite" aria-atomic="true">
        <Board
          squares={squares}
          onSquareClick={handleSquareClick}
          winningLine={line}
          disabled={Boolean(winner)}
        />
      </main>

      <footer className="game-footer">
        <div
          className={`status ${winner ? 'status-win' : isDraw ? 'status-draw' : ''}`}
          role="status"
        >
          {status}
        </div>
        <button
          type="button"
          className="btn-reset"
          onClick={handleReset}
          aria-label="Start a new game"
        >
          New Game
        </button>
      </footer>
    </div>
  );
}
