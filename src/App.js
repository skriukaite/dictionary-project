import React from "react";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-background">
        <div className="container">
          <header>DIC•TIO•NA•RY</header>
          <main>
            <Dictionary defaultKeyword="peace" />
          </main>
          <footer className="text-left">
            <small>
              Coded by Sandra Kriukaitė, open-sourced on{" "}
              <a
                className="GitHub"
                href="https://github.com/skriukaite/dictionary-project"
                target="__blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
