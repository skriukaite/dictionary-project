import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${searchedWord}`);
  }

  function handleEnteredWord(event) {
    setSearchedWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleEnteredWord}
        />{" "}
      </form>
    </div>
  );
}
