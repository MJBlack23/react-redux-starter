// file: ./src/reducers/index.js
'use strict';

// Get Redux's combine reducers to create a single state
import { combineReducers } from 'redux';

// import additional reducers here

const rootReducer = combineReducers({
  state: (state = {}) => state
})

export default rootReducer;
