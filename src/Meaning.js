import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  let partOfSpeech = props.meaning.partOfSpeech;
  let definition = props.meaning.definition;
  let example = props.meaning.example;
  if (example === null) {
    example = "-";
  }

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
    </div>
  );
}
