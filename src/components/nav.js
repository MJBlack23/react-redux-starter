// file: ./src/component/nav.js

import React, { Component } from 'react';

class Nav extends Component {

  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">React-Redux Starter</a>
          </div>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/services">Services</a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/billing">Billing</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="/logout">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }; // end render function

}; // end class Nav

export default Nav
