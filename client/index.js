import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'components/Application';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter } from 'react-router-dom';

import 'styles/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
