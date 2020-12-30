import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Congrat } from "./pages/Congrat";
import { HNY } from "./pages/HNY";
import "./styles.scss";

const MainContext = createContext(null);

function App() {
  const [muted, setMuted] = useState(true);

  return (
    <MainContext.Provider value={{ muted, setMuted }}>
      <Router>
        <Switch>
          <Route path="/congrat">
            <Congrat />
          </Route>
          <Route path="/hny">
            <HNY />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </MainContext.Provider>
  );
}

export const useMain = () => {
  return useContext(MainContext);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
