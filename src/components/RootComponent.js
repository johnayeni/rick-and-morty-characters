import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import CharacterCard from "./CharacterCard";

const GET_CHARACTERS = gql`
  {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const RootComponent = () => {
  const { data, error, loading } = useQuery(GET_CHARACTERS);
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const {
    characters: { results: characters }
  } = data;
  return (
    <div className="container">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default RootComponent;
