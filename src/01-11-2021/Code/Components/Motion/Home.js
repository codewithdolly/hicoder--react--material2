import React from "react";
import "./Style.scss";
// import  motion  from "framer-motion";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <div className="home">
      {/* <motion.h1 animate={{fontSize: 50}}>Welcome to burger joint</motion.h1> */}
        <Link to="/">
         
          <button style={{ backgroundColor: "red" }}>
            Create your Own Burger
          </button>
        </Link>

        <Switch>
          <Route path="/"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Home;
