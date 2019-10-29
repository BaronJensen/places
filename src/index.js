import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ClayProvider from 'local_npm/clay-components'
import App from './App';
//import * as serviceWorker from './serviceWorker';
const Init = ()=>(
	<ClayProvider>
	       	
		<BrowserRouter>
			<App />
		</BrowserRouter> 

	</ClayProvider>
);






























ReactDOM.render(<Init />, document.getElementById('root'));


// Error:
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
