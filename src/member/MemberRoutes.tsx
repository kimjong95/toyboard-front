import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { LoginContainer } from './index';
import UserJoinContainer from './view/container/UserJoinContainer';

class MemberRoutes extends React.PureComponent<RouteComponentProps> {
  //
  render() {
    //
    const { match } = this.props;

    return (
      <Switch>
        <Route path={`${match.path}/join`} component={UserJoinContainer} />
        <Route path={`${match.path}/login`} component={LoginContainer} />
      </Switch>
    );
  }
}

export default MemberRoutes;
