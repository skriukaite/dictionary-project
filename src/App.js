import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary 📖 project</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by Sandra Kriukaitė</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
