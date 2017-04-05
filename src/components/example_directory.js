// file: ./src/components/example_directory.js
'use strict';

import React, { Component } from 'react';

class Directory extends Component {

  render () {
    return (
      <div className='col-md-4 col-md-offset-1 col-xs-12'>
        <h3>Project Structure</h3>
        -- src <br />
        ---- actions <br />
        ------ index.js <br />
        ---- components <br />
        ------ app.js <br />
        ------ dependencies.js <br />
        ------ example_directory.js <br />
        ------ nav.js <br />
        ---- containers <br />
        ---- reducers <br />
        ------ index.js <br />
        ----- index.js <br />
        styles <br />
        -- main.css <br />
        index.html <br />
        package.json <br />
      </div>
    )
  }; // end function render

}; // end class Directory

export default Directory
