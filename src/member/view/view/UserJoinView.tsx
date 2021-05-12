import * as React from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import User from '../../model/User';

interface Props {
  changeUserProps: (name: string, value: string) => void;
  registerUser: () => void;
  routeToLoginPage: () => void;

  user: User;
}

@observer
@autobind
class UserJoinView extends Component<Props, {}> {
  //

  render() {
    //
    const { user } = this.props;
    const { changeUserProps, registerUser, routeToLoginPage } = this.props;

    return (
      <Form error>
        <Form.Field width={6}>
          <label>id</label>
          <input placeholder="id" onChange={(e) => changeUserProps('id', e.target.value)} />
        </Form.Field>
        <Form.Field width={6}>
          <label>password</label>
          <input type="password" placeholder="password" onChange={(e) => changeUserProps('password', e.target.value)} />
        </Form.Field>
        <Form.Field width={6}>
          <label>passwordCheck</label>
          <input
            type="password"
            placeholder="passwordCheck"
            onChange={(e) => changeUserProps('passwordCheck', e.target.value)}
          />
          {(user.password === '' && user.passwordCheck === '') || user.password === user.passwordCheck ? null : (
            <Message error content="비밀번호가 동일하지 않습니다." />
          )}
        </Form.Field>
        <Form.Field width={6}>
          <label>nickname</label>
          <input placeholder="nickname" onChange={(e) => changeUserProps('nickname', e.target.value)} />
        </Form.Field>
        <Form.Group>
          <Form.Button onClick={registerUser}> 계정 생성 </Form.Button>
          <Form.Button onClick={routeToLoginPage}> 로그인 화면 가기 </Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default UserJoinView;
