import React from 'react';
import Square from './Square';

/**
 * Board renders a 3x3 grid of squares.
 * Props:
 * - squares: array of 9 values (X|O|null)
 * - onSquareClick: function(index) called when a square is clicked
 * - winningLine: array of indices that form a winning line (if any)
 * - disabled: boolean to prevent further moves (e.g., after win)
 */
// PUBLIC_INTERFACE
export default function Board({ squares, onSquareClick, winningLine = [], disabled = false }) {
  const renderSquare = (i) => {
    const isWinning = winningLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        disabled={disabled || Boolean(squares[i])}
        isWinning={isWinning}
        index={i}
      />
    );
  };

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {Array.from({ length: 3 }).map((_, row) => (
        <div className="board-row" role="row" key={row}>
          {Array.from({ length: 3 }).map((__, col) => {
            const index = row * 3 + col;
            return renderSquare(index);
          })}
        </div>
      ))}
    </div>
  );
}
