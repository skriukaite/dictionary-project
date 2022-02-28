import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div>{props.meaning.definitions[0].definition}</div>
      <br />
      <div className="example">{props.meaning.definitions[0].example}</div>
      <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
    </div>
  );
}
