import { combineReducers } from 'redux';
import userReducer from './user/reducers/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
