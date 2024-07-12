import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "9fb66eat3c45068of64821d7cabe200f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <label>What word do you want to look up?</label> <br />
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
