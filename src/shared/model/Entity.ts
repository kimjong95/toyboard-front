import { decorate, observable } from 'mobx';

export class Entity {
  //
  id: string = '';

  constructor(entity?: Entity) {
    //
    if (entity) {
      Object.assign(this, { ...entity });
    }
  }
}

decorate(Entity, {
  id: observable,
});
