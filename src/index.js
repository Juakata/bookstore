import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';

const state = {
  books: [
    {
      id: 1,
      title: 'Harry Potter 1',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Harry Potter 2',
      category: 'Action',
    },
    {
      id: 3,
      title: 'Harry Potter 3',
      category: 'Action',
    },
  ],
};

const store = createStore(rootReducer, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
