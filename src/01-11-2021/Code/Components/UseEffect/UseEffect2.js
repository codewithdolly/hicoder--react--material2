import React, { useState, useEffect } from "react";

const coWinUrl= "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=512&date=31-10-2021";


const person = {
  name: "R. Sinha",
  num: 2042,
  place: "TamilNadu",
  indian: "true",
};

const UseEffect2 = () => {
  const [count, setCout] = useState(0);
  const [name, setName] = useState("Radha");
  const [obj, setobj] = useState(person);
  const [value, setValue] = useState(null)

  console.log(data);

  let manageState = () => {
    console.log("clicked");
    setCout(count + 1);
    setName("Dolly");
    setobj({
      name: "Raghupathi Singh",
      num: 2050,
      place: "Usa",
      indian: "false",
    });
  };

  useEffect(() => {
      manageState();
      fetch(coWinUrl)
      .then((res)=>
        res.json()
      )
      .then((data)=> setValue(data));
      
  },[]) //if you want to call that pertucular useState then you can call within the bracket [],like [count, name, obj] and other state will call atlist one time.
  //if you want to call function only one time then give empty [] bracket.

  return (
    <>
  <p>{data.map((obj)=>{
    return(
      <div>
       { obj.name}
      </div>
    )
  })}</p>
      <h2>Count : {count}</h2>
      <h3>Hey {name}</h3>
      <p>
        Hello <b>{obj.name}</b> ji.
      </p>
      <p>
        your Number <b>{obj.num}</b>.
      </p>
      <p>
        {" "}
        your place is <b>{obj.place}</b>.
      </p>
      <p>
        and you are an Indian <b>{obj.indian}</b>.{" "}
      </p>
      {/* <button onClick={manageState}>incresed number</button> */}
    </>
  );
};

export default UseEffect2;
