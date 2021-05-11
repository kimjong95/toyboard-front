import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Store from './Store';
import { Provider } from 'mobx-react';
import LoginContainer from './member/view/container/LoginContainer';
import Routes from './Routes';

function App() {
  return (
    <Store>
      <Provider>
        <Routes />
      </Provider>
    </Store>
  );
}

export default App;
