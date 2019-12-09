import React from "react";
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Index from '../pages/index'
import Video from '../pages/video'
import Workplace from '../pages/Workplace'
import '../style/index.css'

function AppRouter() {
    return (
      <Router>
          <div className="mainDiv">
            <div className="leftNav">
                <h3>一级导航</h3>
                <ul>
                    <li> <Link to="/">博客首页</Link> </li>
                    <li><Link to="/Video/">视频教程</Link> </li>
                    <li><Link to="/Workplace">职场技能</Link> </li>
                </ul>
            </div>

            <div className="rightMain">
                <Route path="/"  exact component={Index} />
                <Route path="/Video/" component={Video} />
                <Route path="/Workplace/" component={Workplace} />
            </div>
          </div>
      </Router>
    );
  }

  export default AppRouter;