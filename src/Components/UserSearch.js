import React from "react";

function UserSearch({ userSearch, setUserSearch, setCurrentURL, isError }) {
  return (
    <div className="searchGroup">
      <label>Enter a Pokemon Name or ID...</label>
      <hr className="separator"></hr>
      {isError && <h6>Oops that's not a valid Pokemon, try again!</h6>}
      <input
        className={isError ? 'errorInput' : ''}
        id="pokeSearch"
        type="text"
        value={userSearch}
        placeholder='Type here...'
        onChange={(e) => setUserSearch(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setCurrentURL(
              `https://pokeapi.co/api/v2/pokemon/${userSearch.toLowerCase()}`
            );
          }
        }}
      />
    </div>
  );
}

export default UserSearch;
