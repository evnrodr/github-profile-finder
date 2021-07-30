import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/Users";

import { UserContextProvider } from "./contexts/UserContext";

import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <UserContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/users/:id" component={User} />
        </UserContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
