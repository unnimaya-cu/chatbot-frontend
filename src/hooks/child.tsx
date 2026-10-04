import React from "react";

const Child = React.memo(({ handleClick }: { handleClick: () => void }) => {
  console.log("Child Rendered");

  return <button onClick={handleClick}>Click Me</button>;
});

export default Child;
