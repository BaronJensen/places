import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Provider, {PlacesContext} from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Provider /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
