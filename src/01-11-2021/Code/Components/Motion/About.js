import React from 'react'
import { useHistory } from "react-router-dom";

function About() {
    let history = useHistory();
    
  let click = () => {
    history.push("/contact");      //using useHistory
  };
    return (
        <div>
             <button type="button" onClick={click}>
        Go home
      </button>
            <h2>About me</h2>
        </div>
    )
}

export default About;
