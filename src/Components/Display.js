import React, { useState, useEffect } from "react";

function Display({
  pokeData,
  types,
  weight,
  height,
  pokeID,
  normalURL,
  shinyURL,
  handlePrev,
  handleNext,
}) {
  String.prototype.capitalCase = function () {
    if (!this) return;
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  const [isShiny, setIsShiny] = useState(false);

  let currentPokeName = pokeData.name;
  return (
    <>
      <div>
        <div>
          {pokeData.id && (
            <img
              id="pokeSprite"
              src={isShiny ? shinyURL : normalURL}
              onClick={() => setIsShiny(!isShiny)}
            />
          )}
          {currentPokeName && <h4>{currentPokeName.capitalCase()}</h4>}
          {pokeID && (
            <div className="prevNextButtons">
              <button onClick={handlePrev}>&larr;</button>
              <button onClick={handleNext}>&rarr;</button>
            </div>
          )}
        </div>
        <div className="gridStats">
          {types && (
            <p>
              Type: <span className="pokeData">{types}</span>
            </p>
          )}
          {pokeID && (
            <p>
              PokeDex-ID: <span className="pokeData">{pokeID}</span>
            </p>
          )}
          {height && (
            <p>
              Height: <span className="pokeData">{height}</span>
            </p>
          )}
          {weight && (
            <p>
              Weight: <span className="pokeData">{weight}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Display;
