import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LoginContainer } from './member';
import MemberRoutes from './member/MemberRoutes';

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
                <Route exact path="/" component={() => <Redirect exact from="/" to={`/user/login`} />} />
                <Route path="/user" component={MemberRoutes} />
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
