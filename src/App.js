import "./App.css";
import React, { useState, useRef } from "react";
import pokedex from "./stuff/pokedex.png";

import SearchQuery from "./components/searchQuery";
import Header from "./components/header";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [typedPokemon, setTypedPokemon] = useState("");

  const pokeRef = useRef();
  function handleSearch(event) {
    const query1 = pokeRef.current.value.toLowerCase();
    if (query1.length === 0) {
      return;
    }
    setPokemon(query1);
  }

  const keyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  console.log(pokemon);
  return (
    <>
      <header>
        <Header />

      </header>
      <body2>
        <section className="container">
          <h1>Pokédex</h1>
          <img src={pokedex} id="pokemeasurements" alt=" help us please" width="199" height="172" />
          <form
            onSubmit={function (event) {
              event.preventDefault();
              setPokemon(typedPokemon);
            }}
          >
            <input
              id="inputId"
              type="text"
              ref={pokeRef}
              onKeyPress={keyDown}
              placeholder="Insert Pokémon here"
              onChange={function (event) {
                setTypedPokemon(event.target.value);
              }}
            />
            <button id="submitButton">Go!</button>
            <SearchQuery pokemon={pokemon} />
          </form>
        </section>
      </body2>
      <div class="footer">
        <p>Made by Anwar and Aisha</p>
      </div>
    </>
  );
}

export default App;
