import { combineReducer } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducer({ bookReducer });

export default rootReducer;
