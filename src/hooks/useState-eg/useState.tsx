import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Component Rendered");

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
export default Counter