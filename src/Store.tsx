import React from 'react';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { UserService } from './member';

configure({
  enforceActions: 'observed',
});

function Store({ children }: any) {
  //
  return <Provider userService={UserService.instance}>{children}</Provider>;
}

export default Store;
