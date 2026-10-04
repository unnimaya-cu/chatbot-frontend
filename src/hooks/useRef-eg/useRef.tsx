import { useRef } from "react";

function Counter() {
  const countRef = useRef(0);

  console.log("Component Rendered");

  return (
    <>
      <button
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        Increment
      </button>
    </>
  );
}
export default Counter