import React, { Component, Fragment } from 'react';
import routes from 'routes';
import { Route } from 'react-router-dom';
import { values } from 'ramda';

class Application extends Component {
  render() {
    const routeList = values(routes);
    return (
      <Fragment>
        <header>
          <h1>Boilerplate</h1>
        </header>
        <main>
          {
            routeList.map(route => (
              <Route key={route.path} path={route.path} component={route.component} />
            ))
          }
        </main>
      </Fragment>
    );
  }
}

export default Application;
