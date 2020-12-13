import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './challengeOne_Profile/profile';
// import axios from 'axios';
import data from './challengeOne_Profile/apiData';
import React, {useState, useEffect} from 'react'

function App() {
	const [dataState, setDataState ] = useState(data);
	console.log(data)
	// useEffect (() => {
	// axios
	// 	.get('https://api.github.com/users/brianreisman')
	// 	.then(res => {
	// 			console.log(res.data)
	// 		})
	// 		.catch(err => {
	// 				console.error(err)
	// 			})
	// 		}, [])

	return (
		<div>
		<Profile data={dataState}/>
			{/* <Route exact path="/profile" component={Profile} /> */}
		</div>
	);
}

export default App;
