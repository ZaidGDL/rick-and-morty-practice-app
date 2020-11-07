import React from 'react';
import './CharacterDetail.css';

const CharacterDetail = ({ character, onClose }) => {
  return  (
    <div className="character-detail" tabIndex="0">
      <button aria-label="Close character detail" onClick={onClose}>X</button>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
      <p>{character.location.name}</p>
    </div>
  )
};

export default CharacterDetail;
