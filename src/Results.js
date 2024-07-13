import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  // response.data.meanings[0];

  if (props.results) {
    let phonetic = props.results.phonetic;
    let word = props.results.word;

    return (
      <div className="Results">
        <h2>{word}</h2>
        <h4>{phonetic}</h4>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}
