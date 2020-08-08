import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Test1 from './pages/test1';
import Test2 from './pages/test2';
import './App.css';


function App(){
	return(
		<Router>
			<Switch>
				<Route path="/" exact={true} component={Test1} />
				<Route path="/test2" component={Test2} />
			</Switch>
		</Router>
	);
}

export default App;