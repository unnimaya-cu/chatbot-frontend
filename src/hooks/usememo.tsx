import { useMemo, useState } from "react";

  const ExampleuseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useMemo(()=>{
    console.log("Calculating...");
  return count * 10

  },[count])

  return (
    <>
      <h1> useMemo </h1>
      <h1>  Count: {count}</h1>
      <h2>Result:{expensiveCalculation}  </h2>
      <button 
      onClick={() => setCount(count + 1)}>
      increment</button>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
};
export default ExampleuseMemo;
