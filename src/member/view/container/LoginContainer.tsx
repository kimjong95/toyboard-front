import * as React from 'react';
import { Container, Form, Input, Label } from 'semantic-ui-react';
import logo from '../../../logo.svg';
import UserService from '../../logic/UserService';
import { inject, observer } from 'mobx-react';
import LoginUserView from '../view/LoginUserView';
import { autobind } from 'core-decorators';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  userService?: UserService;
}

interface State {}

@inject('userService')
@observer
@autobind
class LoginContainer extends React.Component<Props, State> {
  //
  componentDidMount() {}

  changeLoginInfo(name: string, value: string) {
    //
    const { userService } = this.props;
    if (userService) {
      userService.changeLoginUserProps(name, value);
    }
  }

  async login() {
    const { userService } = this.props;
    if (userService) {
      await userService.login();
      alert('로그인 되었습니다.');
    }
  }

  routeToJoin() {
    this.props.history.push('/user/join');
  }

  render() {
    //
    const { loginInfo } = this.props.userService!;

    return (
      <Container fluid>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <LoginUserView
            changeLoginInfo={this.changeLoginInfo}
            login={this.login}
            loginInfo={loginInfo}
            routeToJoin={this.routeToJoin}
          />
        </div>
      </Container>
    );
  }
}

export default withRouter(LoginContainer);
