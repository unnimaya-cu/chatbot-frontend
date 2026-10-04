import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("count before", count); // 0
    setCount(count + 1);
    console.log("count after", count); // 0
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}
