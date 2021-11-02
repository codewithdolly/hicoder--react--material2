import React, { useState } from "react";

function Counter() {
  const [count, setCout] = useState(0);
  let countNumber = () => {
    console.log("clicked");
    setCout(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={countNumber}>incresed number</button>
    </div>
  );
}

export default Counter;
