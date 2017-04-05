// file: ./src/components/app.js
'use strict';

import React, { Component } from 'react';
import Nav from './nav';
import Directory from './example_directory';
import Dependencies from './dependencies';

class App extends Component {

  // <div classname='col-md-4 col-md-offset-2 col-xs-12 bg-info'>
  //   <Dependencies />
  // </div>

  render () {
    return (
      <div id='content'>
        <Nav />
        <div className='container-fluid'>
          <div className="starter-template">
            <h1>React-Redux Starter</h1>
            <p class="lead">Use this package as a way to quickly start any new React-Redux project.</p>
            <a href='https://github.com/mjblack23/react-redux-starter'>Available on Github</a>
          </div>
          <div className='row'>
            <Directory />
            <Dependencies />
          </div>

        </div>
      </div>


    )
  }; // end function render

}; // end class App

export default App;
