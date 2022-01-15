import React from 'react';
import '../App.css';
import alphabet from './Alphabet';

export const LetterHeader = () => {
  return (
    <div className="header" style={{padding: '20px', display: 'flex'}}>
    {alphabet.map(letter => {
      return (
        <h2 style={{padding: '5px', cursor: 'pointer'}}>{letter.letter}</h2>
      )
    })}
    </div>
  )
}

export default LetterHeader;
