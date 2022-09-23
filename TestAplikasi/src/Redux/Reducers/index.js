import {combineReducers} from 'redux';
import {globalReducer} from './globalReducer';
import {moviesReducer} from './moviesReducer';

const reducer = combineReducers({
  globalReducer,
  moviesReducer,
});

export default reducer;
