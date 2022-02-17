import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;

    axios.get(apiUrl).then(handleResponse);
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
