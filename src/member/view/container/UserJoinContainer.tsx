import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { Component } from 'react';
import { Container, Form, Input, Label } from 'semantic-ui-react';
import User from '../../model/User';
import UserJoinView from '../view/UserJoinView';
import UserService from '../../logic/UserService';

interface States {}

interface Props extends RouteComponentProps {
  //
  userService?: UserService;
}

@inject('userService')
@observer
@autobind
class UserJoinContainer extends Component<Props, States> {
  //
  componentDidMount() {}

  changeUserProps(name: string, value: string): void {
    //
    const { userService } = this.props;
    if (userService) {
      userService.changeUserProps(name, value);
    }
  }

  async registerUser() {
    const { userService } = this.props;
    const { user } = userService!;
    if (userService) {
      if ((user.password === '' && user.passwordCheck === '') || user.password === user.passwordCheck) {
        await userService.registerUser();
        alert('계정이 생성되었습니다. 생성된 계정으로 로그인 해 주세요.');
        this.routeToLogin();
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    }
  }

  routeToLogin() {
    this.props.history.push('/user/login');
  }

  render() {
    //
    const { userService } = this.props;
    const { user } = userService!;

    return (
      <Container fluid>
        <div className="contents">
          <UserJoinView
            changeUserProps={this.changeUserProps}
            registerUser={this.registerUser}
            routeToLoginPage={this.routeToLogin}
            user={user}
          />
        </div>
      </Container>
    );
  }
}

export default withRouter(UserJoinContainer);
