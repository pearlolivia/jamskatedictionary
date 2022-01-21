import React from 'react';

export const Word = ({id,
  name,
  altNames,
  letterGroup,
  description,
  diagram,
  tutorialLink,
  tutorialName}) => {
    console.log(description);
  return (
    <div style={{border: '1px solid black', margin: '5px 0', width: '70%', paddingLeft: '10px'}}>
    <div>
      <h2><i>{name}</i></h2>
      <h4>Also known as: {altNames.map(altName => {
        return (
          <span>{altName}</span>
        )
      })}</h4>
      {description}
    </div>
    <div>
      <img src={diagram}/>
      <a href={tutorialLink}>{tutorialName}</a>
    </div>
    </div>
  )
  // const descriptionP = document.getElementsByClassName('description')[0];
  // descriptionP.innerHTML = description;
}

export default Word;
