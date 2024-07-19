import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    let phonetic = props.results.phonetic;
    let word = props.results.word;

    return (
      <div className="Results">
        <h2>{word}</h2>
        <h4 className="phonetic">[{phonetic}]</h4>
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
