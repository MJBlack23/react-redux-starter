// file: ./src/components/example_directory.js
'use strict';

import React, { Component } from 'react';

class Dependencies extends Component {

  render () {
    return (
      <div className='col-md-4 col-md-offset-2'>
        <h3>Project Dependencies</h3>
          <ul className='list-unstyled'>
            <li><strong>Dependencies</strong>
              <ul className='list-unstyled'>
                <li>Bootstrap 3</li>
                <li>JQuery</li>
                <li>React</li>
                <li>ReactDOM</li>
                <li>React-Redux</li>
                <li>Redux</li>
              </ul>
            </li>
            <li>&nbsp;</li>
            <li><strong>Dev Dependencies</strong>
              <ul className='list-unstyled'>
                <li>Babel Preset es2015</li>
                <li>Babel Preset React</li>
                <li>Babelify</li>
                <li>Browserify</li>
                <li>HTTP Server</li>
              </ul>
            </li>
          </ul>
      </div>
    )
  }; // end function render

}; // end class Directory

export default Dependencies
