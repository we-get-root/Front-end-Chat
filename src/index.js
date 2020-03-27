import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './ROOT_FOLDER/app';
import state from './ROOT_FOLDER/_state/request';

window.store = state; // <= убрать как только настрою store


ReactDOM.render(
  <BrowserRouter>
    <Provider store={state}>
      <App/>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();
