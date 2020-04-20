import React, { useState, useEffect } from 'react';
import cardsArray from './cards.js';
import styles from './styles.css';

export default function MemoryGame(){
  const [boardSize, setBoardSize] = useState('4x3');

  useEffect(() => {

  }, [boardSize]);

  return (
    <div className={boardSize === '4x3' ? styles.fourByThree : styles.default}>

    </div>
  );
}
