import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import GetPokemon from "./components/GetPokemon";
import Home from "./components/Home";

function App() {
  const [pokemon, setPokemon] = useState("bulbasaur", "ivysaur", "venusaur");
  return (
    <div className="app">
      <section>
        <header className="header">
          <h3>Header</h3>
        </header>
      </section>
      <nav className="nav">
        <Home />
        <button className="nav-button">Home</button>
        <button className="nav-button">Pokemons!</button>
        <button className="nav-button">Contact</button>
        <button className="nav-button">Team</button>
      </nav>

      <body className="body">
        <h2>Body</h2>

        <SearchBar />

        <GetPokemon />

        <div className="container"> </div>
      </body>
      <footer className="footer">
        <h1>Footer. This was created for nothing</h1>
      </footer>
    </div>
  );
}

export default App;
