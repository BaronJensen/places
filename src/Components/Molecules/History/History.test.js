import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import History from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<History />, div);
  ReactDOM.unmountComponentAtNode(div);
});
