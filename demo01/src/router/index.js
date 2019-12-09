import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../pages/index'
import List from '../pages/list'
import Home from '../pages/home'

const index = () => {
  return (
    <Router>
      <ul>
        <li> <Link to="/">首页</Link> </li>
        <li><Link to="/list/12132">列表</Link> </li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
      <Route path="/home/:id" component={Home} />
    </Router>
  );
}

export default index;