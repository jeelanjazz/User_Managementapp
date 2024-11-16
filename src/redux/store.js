import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
