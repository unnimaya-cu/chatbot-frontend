import { useCallback, useState } from "react";
import Child from "./child";

const ExampleuseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);
  return (
    <>
      <div>
        <h1>useCallback() Example </h1>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>Increment</button>

        <Child handleClick={handleClick} />
      </div>
    </>
  );
};
export default ExampleuseCallback;
