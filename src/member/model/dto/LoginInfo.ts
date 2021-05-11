import { decorate, observable } from 'mobx';

export default class LoginInfo {
  //
  id: string = '';
  password: string = '';

  constructor(loginUser?: LoginInfo) {
    if (loginUser) {
      Object.assign(this, { ...loginUser });
    }
  }
}

decorate(LoginInfo, {
  id: observable,
  password: observable,
});
