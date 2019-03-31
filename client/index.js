import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'components/Application';
import { Provider } from 'react-redux';
import store from 'store';

import 'styles/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);
