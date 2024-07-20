import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);

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

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setImages(response.data);
  }

  return (
    <div className="Dictionary">
      <section className="form">
        <form onSubmit={search}>
          <label>What word would you like to look up?</label> <br />
          <input
            type="search"
            placeholder="For example coding, student, computer, ..."
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      <Results results={results} />
      <Images images={images} />
    </div>
  );
}
