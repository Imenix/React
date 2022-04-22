import { useState } from "react";
import "./App.css";
import Headline from "./components/Content/Headline";
import Header from "./components/Content/Header";
import Counter from "./components/Counter";
import "./Button.css";

function App() {
  return (
    <div>
      <Header />
      <Headline />
      <Counter className="button" />
    </div>
  );
}

export default App;
