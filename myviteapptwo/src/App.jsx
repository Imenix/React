import { useState } from "react";
// import logo from './logo.svg'
import "./App.css";
import Counter from "./components/Counter";
import ShowHide from "./components/ShowHide";
import OnOffButton from "./components/OnOffButton";

const App = () => (
  <div>
    <h1>Mike second ViteAppReactPogChamp</h1>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <ShowHide />
    <div>
      <OnOffButton />
    </div>
  </div>
);

export default App;
