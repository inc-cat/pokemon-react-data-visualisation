import React, { useEffect, useState } from "react";

export default function SearchQuery({ pokemon }) {
  const [pokemonQuery, setPokemonQuery] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(
    function () {
      if (pokemon) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            setPokemonQuery(data.species);
            setPokemonData(data);
            console.log(data, "pokemon type");
            setNotFound(false);
          })
          .catch(function () {
            setNotFound(true);
          });
      }
    },
    [pokemon]
  );
  // console.log(notFound);

  if (notFound) {
    return (
      <div>
        <h2>Nil</h2>
      </div>
    );
  }

  return (
    <div className="pokemoncontainer">
      {pokemonData && (
        <>
          <show className="showquery">
          <h2>Showing: {pokemonQuery.name}</h2>
          <h3>#{pokemonData.id}</h3>
          <img id="pokeimage"
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          ></img>
          <img id="pokeimage"
            src={pokemonData.sprites.front_shiny}
            alt={pokemonData.name}
          ></img>

          {pokemonData.types.map(({ type }) => {
            return (
              <span id="type" key={type.name} className={type.name}>
                {type.name}
                </span>
            );
          })}
          <br></br>
          <span>Height: {pokemonData.height}'</span><br></br>
          <span>Weight: {pokemonData.weight}KG</span>
      </show>
        </>
      )}
    </div>
  );
}
