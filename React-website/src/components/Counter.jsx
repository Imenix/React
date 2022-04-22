import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>

      {count}
    </div>
  );
}

export default Counter;
