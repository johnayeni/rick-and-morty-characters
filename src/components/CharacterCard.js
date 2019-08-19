import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
};

export default CharacterCard;
