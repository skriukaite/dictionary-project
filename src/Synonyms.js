import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <span>Synonyms:</span>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
                <span>{synonym}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
