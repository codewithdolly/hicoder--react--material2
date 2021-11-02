import * as React from "react";
import "./App.scss";
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom'
import Home from "./28-10-2021/Code/Componented/Routing/Home";
import About from "./28-10-2021/Code/Componented/Routing/About";
import Service from "./28-10-2021/Code/Componented/Routing/Service";
import Contact from "./28-10-2021/Code/Componented/Routing/Contact";




const App = () => {
  return(
    // <BrowserRouter>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/service">Service</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>


    //   <Switch>
    //   <Route exact path="/" component={Home}>
    //   </Route>

    //   <Route exact path="/about" component={About}>
    //   </Route>
    //   <Route exact path="/service" component={Service}>
    //   </Route>
    //   <Route exact path="/contact" component={Contact}>
    //   </Route>
      
    //   </Switch>



   
    // </BrowserRouter>
    <div>Hi</div>

  );
};

export default App;
