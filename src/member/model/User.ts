import { Entity } from '../../shared/model/Entity';
import { Role } from './Role';
import { decorate, observable } from 'mobx';

export default class User extends Entity {
  name: string = '';
  password: string = '';
  nickname: string = '';
  role: Role = Role.MEMBER;
  createTime: number = 0;
  updatedTime: number = 0;

  constructor(user?: User) {
    super();
    if (user) {
      Object.assign(this, { ...user });
    }
  }
}

decorate(User, {
  name: observable,
  password: observable,
  nickname: observable,
  role: observable,
  createTime: observable,
  updatedTime: observable,
});
