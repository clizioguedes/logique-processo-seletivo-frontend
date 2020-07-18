import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import CadastraAssociado from "./pages/CadastraAssociado";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/cadastro" component={CadastraAssociado} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
