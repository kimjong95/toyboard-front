import * as React from 'react';
import { Container, Form, Input, Label } from 'semantic-ui-react';
import logo from '../../../logo.svg';
import UserService from '../../logic/UserService';
import { inject, observer } from 'mobx-react';

interface Props {
  userService?: UserService;
}

interface State {}

@inject('userService')
@observer
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
    }
  }

  render() {
    //
    const { loginInfo } = this.props.userService!;

    return (
      <Container fluid>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Form>
            <Form.Field inline>
              <Label>id</Label>
              <Input
                inline
                value={loginInfo && loginInfo.id}
                onChange={(e: any) => this.changeLoginInfo('id', e.target.value)}
              />
            </Form.Field>
            <Form.Field inline>
              <Label>pw</Label>
              <Input
                inline
                type="password"
                value={loginInfo && loginInfo.password}
                onChange={(e: any) => this.changeLoginInfo('password', e.target.value)}
              />
            </Form.Field>
            <Form.Button onClick={() => this.login()}> 로그인 </Form.Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default LoginContainer;
