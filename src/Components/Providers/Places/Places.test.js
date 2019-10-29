import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Provider, {PlacesContext} from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider />, div);
  ReactDOM.unmountComponentAtNode(div);
});
