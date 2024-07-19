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
      <section className="Meaning">
        <h4>{partOfSpeech}</h4>
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
      </section>
    );
  } else {
    return (
      <section className="Meaning">
        <h4>{partOfSpeech}</h4>
        <p>
          <strong>Definition: </strong>
          {definition}
        </p>
        <p>
          <strong>Example: </strong>
          <em>{example}</em>
        </p>
        <p>
          <strong>Synonyms: </strong>
          {props.meaning.synonyms.map(function (synonym, index) {
            return (
              <ul className="synonyms">
                <li key={index}>{synonym}</li>
              </ul>
            );
          })}
        </p>
      </section>
    );
  }
}
