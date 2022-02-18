import React from "react";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-background">
          <header className="App-header">DIC•TIO•NA•RY</header>
          <main>
            <Dictionary />
          </main>
          <footer className="text-center">
            <small>Coded by Sandra Kriukaitė</small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
