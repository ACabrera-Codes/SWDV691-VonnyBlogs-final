import React from "react";
import { Link, withRouter } from "react-router-dom";
import mylogo from './images/mylogo.png';


function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg py-1 navbar-light bg-light shadow-sm">
      
        <div class="container ">
          <a class="navbar-brand" href="/">
          <img src={mylogo} class="rounded-circle" width="125" height="125" alt="VonnyBlogs Logo" ></img>
          </a>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/submissions" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/submissions">
                  Submissions
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/admin" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);