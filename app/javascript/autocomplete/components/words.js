import React from 'react';
import WordItem from './word-item';

const Words = (props) => {
  if (!props.words) {
    return <div>  </div>
  }
  const word = props.words.map((word => {
    return(
      <WordItem
        key={word}
        word={word}
      />
    );
  }))
  return (
    <div>
      <ul>
       {word}
      </ul>
     </div>
  );
}


export default Words
