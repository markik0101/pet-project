import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import {BrowserRouter} from 'react-router-dom'
import './index.less'
import {Provider} from 'react-redux'
import {store} from './reducers/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
    	</BrowserRouter>
	</React.StrictMode>
);