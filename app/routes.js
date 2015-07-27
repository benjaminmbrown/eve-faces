import React from 'react';
import {Route} form 'react-router';
import App from './components/App';
import Home from './components/Home';

export default{
	<Route handler = {App}>
		<Route path = '/' handler = "{Home}"/>
	</Route>
}