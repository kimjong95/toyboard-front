import * as React from 'react';
import { Form, Input, Label } from 'semantic-ui-react';
import LoginInfo from '../../model/dto/LoginInfo';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';

interface Props {
  changeLoginInfo: (name: string, value: string) => void;
  login: () => void;
  routeToJoin: () => void;

  loginInfo: LoginInfo;
}

@observer
@autobind
class LoginUserView extends React.Component<Props, {}> {
  //
  render() {
    //
    const { changeLoginInfo, login, routeToJoin } = this.props;
    const { loginInfo } = this.props;

    return (
      <Form>
        <Form.Field inline>
          <Label>id</Label>
          <Input
            inline
            value={loginInfo && loginInfo.id}
            onChange={(e: any) => changeLoginInfo('id', e.target.value)}
          />
        </Form.Field>
        <Form.Field inline>
          <Label>pw</Label>
          <Input
            inline
            type="password"
            value={loginInfo && loginInfo.password}
            onChange={(e: any) => changeLoginInfo('password', e.target.value)}
          />
        </Form.Field>
        <Form.Button onClick={login}> 로그인 </Form.Button>
        <Form.Button onClick={routeToJoin}> 회원가입 </Form.Button>
      </Form>
    );
  }
}

export default LoginUserView;
