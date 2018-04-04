import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reg from './Reg';
import Login from './Login';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom'

const getConfirmation = (message, callback) => {
	const allowTransition =window.confirm(message);
	callback(allowTransition);
}

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
	<HashRouter
		basename = '/'
		forceRefresh = {supportsHistory}
		getUserConfirmation = {getConfirmation}
		keyLength = {6}>
		<div>
			<Route exact path='/' component={Main}></Route>
			<Route exact path='/Reg' component={Reg}></Route>
			<Route exact path='/Login' component={Login}></Route>
		</div>
	</HashRouter>
	, document.getElementById('root'));
registerServiceWorker();
