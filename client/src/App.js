import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./features/home";
import Warehouse from "./features/warehouse";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/warehouse" component={Warehouse} />
    </Router>
  );
}
