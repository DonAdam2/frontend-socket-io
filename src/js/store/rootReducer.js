import { combineReducers } from 'redux';
import app from './app/reducers/AppReducer';
import chat from './chat/reducers/ChatReducer';

const rootReducer = combineReducers({
  app,
  chat,
});

export default rootReducer;
