import UserApi from './api/UserApi';
import LoginInfo from '../model/dto/LoginInfo';
import { action, observable } from 'mobx';
import _ from 'lodash';
import User from '../model/User';

class UserService {
  //
  static instance: UserService;

  userApi: UserApi;

  @observable
  loginInfo: LoginInfo = new LoginInfo();

  @observable
  user: User = new User();

  constructor(userApi: UserApi) {
    this.userApi = userApi;
  }

  /// loginInfo
  @action
  changeLoginUserProps(name: string, value: string): void {
    //
    this.loginInfo = _.set(this.loginInfo, name, value);
  }

  login(): Promise<boolean> {
    //
    return this.userApi.loginUser(this.loginInfo);
  }

  /// user

  registerUser(): Promise<User> {
    //
    return this.userApi.register(this.user);
  }

  @action
  changeUserProps(name: string, value: string): void {
    //
    this.user = _.set(this.user, name, value);
  }
}

UserService.instance = new UserService(UserApi.instance);
export default UserService;
