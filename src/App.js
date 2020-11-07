import React, { useState, useEffect } from 'react';
import api from './api';
import './App.css';
import Character from './Character';
import CharacterDetail from './CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [activeCharacter, setActiveCharacter] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const shouldRenderCharacterList = !activeCharacter;

  const onCharacterClose = () => setActiveCharacter(null);

  const goToNextPage = () => setCurrentPage(page => page + 1);

  const goToPreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(page => page - 1)
    }
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const { data } = await api.getCharacters(currentPage);

      setCharacters(data.results);
    };

    fetchCharacters();
  }, [currentPage]);

  return (
    <div className="container">
      <nav>
        <button>Characters</button>
        <button>Episodes</button>
        <button>Locations</button>
      </nav>
      <div className="characters-container">
        {shouldRenderCharacterList && 
          <>
            {/* Character list component */}
            {
              characters.map(character => (
                <Character 
                  onClick={character => setActiveCharacter(character)}
                  key={character.id}
                  character={character}
                />
              ))
            }
            <button onClick={goToPreviousPage}>Previous page</button>
            <p>Current page: {currentPage}</p>
            <button onClick={goToNextPage}>Next page</button>
          </>
        }
      </div>
      {
        activeCharacter && <CharacterDetail character={activeCharacter} onClose={onCharacterClose} />
      }
    </div>
  );
}

export default App;

// Loader
// https://loading.io/css/

// const useState = () => {
//   let count = 1;

//   const setCount = (value) => count = value

//   return [
//     count,
//     setCount,
//   ]
// }
