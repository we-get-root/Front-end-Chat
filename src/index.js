import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import state from './components/_state/request';

window.store = state;


ReactDOM.render(
  <BrowserRouter>
    <Provider store={state}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
