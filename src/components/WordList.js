import React, {Component} from 'react';
import Word from './Word';
import moves from '../data/Moves';

export default class WordList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{paddingLeft: '20px'}}>
      {moves.map(move => {
        return (
          <Word
          name={move.name}
          altNames={move.altNames}
          letterGroup={move.letterGroup}
          description={move.description}
          diagram={move.diagram}
          tutorialLink={move.tutorialLink}
          tutorialName={move.tutorialName}
          />
        )
      })}
      </div>
    )
  }
}
