import React from "react";
import Son from "./Son/Son";
import Son2 from "./Son2/Son2";

export const festivelStatus = React.createContext();

const Parent = () => {
  const festival = "HAPPY DIWALI!";
  return (
    <div>
      <festivelStatus.Provider value={festival}>
        <h1>I am parent.</h1>
        <Son/>
        <Son2 />
      </festivelStatus.Provider>
    </div>
  );
};

export default Parent;
