import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
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
      <Results results={results} />
    </div>
  );
}
