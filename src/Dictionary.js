import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "9fb66eat3c45068of64821d7cabe200f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    // api documentation: https://www.shecodes.io/learn/apis/dictionary

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <label>What word do you want to look up?</label> <br />
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
