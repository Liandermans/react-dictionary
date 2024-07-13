import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  let partOfSpeech = props.meaning.partOfSpeech;
  let definition = props.meaning.definition;
  let example = props.meaning.example;

  return (
    <div className="Meaning">
      <h5>{partOfSpeech}</h5>
      <p>{definition}</p>
      <p>
        <em>{example}</em>
      </p>
    </div>
  );
}
