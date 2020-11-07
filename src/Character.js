import React from 'react';
import './Character.css';

const MyComponent = ({ character, onClick }) => {
  return  (
    <div className="character-container" tabIndex="0" onClick={() => onClick(character)}>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  )
};

export default MyComponent;
