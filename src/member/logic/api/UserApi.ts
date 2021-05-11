import axios from 'axios';
import LoginInfo from '../../model/dto/LoginInfo';
import User from '../../model/User';

class UserApi {
  //
  URL = '/api/users';

  static instance: UserApi;

  loginUser(loginUser: LoginInfo): Promise<boolean> {
    //
    return axios
      .get(this.URL + `/login`, { params: loginUser })
      .then((response) => (response && response.data) || false);
  }

  register(user: User): Promise<User> {
    //
    return axios.post(this.URL, user).then((response) => (response && response.data) || null);
  }
}

UserApi.instance = new UserApi();
export default UserApi;
