import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Development from "./Development";
import Design from "./Design";

function Service() {
  const match = useRouteMatch();
  console.log(match);
  return (
    <>
      <h2>Services</h2>

      <ul>
        <li>
          <Link to={`${match.url}/design`}>Design</Link>
        </li>
        <li>
          <Link to={`${match.url}/development`}>Development</Link>
        </li>
      </ul>

      <Switch>
        <Route exact
          path={`${match.path}/design/:topicId`}
          component={Design}
        ></Route>
        <Route exact path={`${match.path}`} component={Development}></Route>
      </Switch>
    </>
  );
}

export default Service;
