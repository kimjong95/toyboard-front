import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LoginContainer } from './member';

class Routes extends React.PureComponent {
  //
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          path="/"
          render={() => {
            return (
              <Switch>
                <Route exact path="/" component={() => <Redirect exact from="/" to={`/login`} />} />
                <Route path="/login" component={LoginContainer} />
                <Route path="/board" component={() => <></>} />
              </Switch>
            );
          }}
        />
      </BrowserRouter>
    );
  }
}

export default Routes;
