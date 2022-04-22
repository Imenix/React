import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(10);
  const [y, setY] = useState(20);

  useEffect(() => {
    document.title = `x === ${x}.`;
  });
  useEffect(() => {
    (document.title = `y === ${y}.`), [y];
  });

  useEffect(() => {
    console.log("hej");
  }, []);

  return (
    <div>
      <button onClick={() => setX(x + 1)}>X</button>
      <button onClick={() => setY(y + 1)}>Y</button>
    </div>
  );
}

export default App;
