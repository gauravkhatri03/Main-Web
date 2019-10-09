/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import "assets/demo/new.scss"

import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import Blog from './views/BlogPage/BlogPage';
import Blog2 from './views/BlogPage/BlogPage2';
ReactDOM.render(
  <div>
    <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route
        path="/about"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/contact"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/blog"
        render={props => <Blog {...props} />}
      />
      <Route
        path="/blog2"
        render={props => <Blog2 {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>
  </div>
  ,
  document.getElementById("root")
);
