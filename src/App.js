import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Data from './components/Data/Data'
import New from './components/New/New'
import {Route, BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
	render(){
		return(
					<div>
						<Router>
						<Navbar/>
							<Route exact path='/' component={Data}/>
							<Route exact path='/new' component={New}/>
						</Router>
						
					</div>
		);
	}
}
export default App;
