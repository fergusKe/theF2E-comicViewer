import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './containers';

import './stylesheets/main.scss';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('wrap'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers', () => {
    render();
  });
}
