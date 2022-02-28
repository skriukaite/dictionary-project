import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
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
