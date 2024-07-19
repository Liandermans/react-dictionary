import React from "react";

export default function Meaning(props) {
  let partOfSpeech = props.meaning.partOfSpeech;
  let definition = props.meaning.definition;
  let example = props.meaning.example;
  let synonyms = props.meaning.synonyms;

  if (example === null) {
    example = "-";
  }

  if (synonyms === null) {
    return (
      <div className="Meaning">
        <h5>{partOfSpeech}</h5>
        <p>
          <strong>Definition: </strong>
          {definition}
        </p>
        <p>
          <strong>Example: </strong>
          <em>{example}</em>
        </p>
        <p>
          <strong>Synonyms: </strong>-
        </p>
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h5>{partOfSpeech}</h5>
        <p>
          <strong>Definition: </strong>
          {definition}
        </p>
        <p>
          <strong>Example: </strong>
          <em>{example}</em>
        </p>
        {props.meaning.synonyms.map(function (synonym, index) {
          return (
            <ul className="synonyms">
              <li key={index}>{synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}
