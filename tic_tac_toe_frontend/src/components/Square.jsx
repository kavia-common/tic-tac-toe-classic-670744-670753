import React from 'react';

/**
 * Square represents a single Tic Tac Toe cell with accessible button semantics.
 * Props:
 * - value: 'X' | 'O' | null
 * - onClick: click handler
 * - disabled: boolean to prevent clicking
 * - isWinning: highlight as part of winning line
 * - index: position for aria-label
 */
// PUBLIC_INTERFACE
export default function Square({ value, onClick, disabled, isWinning, index }) {
  return (
    <button
      type="button"
      className={`square ${value ? 'filled' : ''} ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Square ${index + 1}${value ? `, ${value}` : ''}`}
    >
      <span className={`mark ${value === 'O' ? 'o' : ''}`}>{value || ''}</span>
    </button>
  );
}
