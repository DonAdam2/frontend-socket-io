//import meta image
import './assets/images/metaImage.jpg';
// required for babel polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import configureStore from './js/store/configureStore';
import App from './App';
import './scss/styles.scss';

//socket client
import SocketClient from './js/services/SocketClient';

const socketClient = new SocketClient();
const store = configureStore(socketClient);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
