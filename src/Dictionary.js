import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <label for="search-field">What word do you want to look up?</label>{" "}
        <br />
        <input type="search" id="search-field" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
