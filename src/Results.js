import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    let phonetic = props.results.phonetic;
    let word = props.results.word;

    return (
      <div>
        <section className="Results">
          <h2>{word}</h2>
          <h5 className="phonetic">[{phonetic}]</h5>
        </section>
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
