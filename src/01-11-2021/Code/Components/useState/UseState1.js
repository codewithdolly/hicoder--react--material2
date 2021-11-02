import React, { useState } from "react";

const person={
    name: "R. Sinha",
    num: 2042,
    place: "TamilNadu",
    indian: "true"
  }


const UseState1=()=> {
  const [count, setCout] = useState(0);
  const [name, setName]= useState("Radha");
  const [obj, setobj] = useState(person)

  let manageState = () => {
    console.log("clicked");
    setCout(count + 1);
    setName("Dolly");
    setobj({
      name: "Raghupathi Singh",
      num: 2050,
      place: "Usa",
      indian: "false"
    })

  };
  return (
    <div>
      <h2>Count : {count}</h2>
      <h3>Hey {name}</h3>
      <p>Hello <b>{obj.name}</b> ji.</p>
      <p>your Number <b>{obj.num}</b>.</p>
      <p> your place is <b>{obj.place}</b>.</p>
      <p>and you are an Indian <b>{obj.indian}</b>. </p>
      <button onClick={manageState}>incresed number</button>
    </div>
  );
}

export default UseState1;
