import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import menus from "./json-data/menus.json";
import { Menus } from "./components/Menu";
import { Range } from "./components/Range";
import { FerryRoutes } from "./components/FerryRoutes";
import { RenderResult, RenderMenu, RenderLink } from "./components/Render";
import "./styles.css";

const App = () => {
  const [selectedFerryRoute, setFerryRoute] = useState();
  const [selectedMenu, setMenu] = useState();
  const [selectedRange, setRange] = useState();

  return (
    <Router>
      <p>Selected Route: {selectedFerryRoute}</p>
      <p>Selected Menu: {selectedMenu}</p>
      <p>Selected Range: {selectedRange}</p>
      <Switch>
        <Route path="/3">
          <RenderResult />
        </Route>
        <Route path="/2">
          <Menus setMenu={setMenu} />
          <Range setRange={setRange} />
          {selectedMenu ? <RenderMenu menu={menus[selectedMenu]} /> : null}
          {selectedMenu && selectedRange ? (
            <RenderLink pageIndex="3">Nästa</RenderLink>
          ) : null}
        </Route>
        <Route path="/1">
          <FerryRoutes setFerryRoute={setFerryRoute} />
          {selectedFerryRoute ? (
            <RenderLink pageIndex="2">Nästa</RenderLink>
          ) : null}
        </Route>
        <Route path="/">
          <RenderLink pageIndex="1">Börja räkna</RenderLink>
        </Route>
      </Switch>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
