import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { creatStore } from 'redux';
import './index.css';
import App from './containers/App';             
import * as serviceWorker from './serviceWorker';
import {searchRobots} from './reducers';
import 'tachyons';

const store = creatStore(searchRobots)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
