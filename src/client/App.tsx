import * as React from 'react';
import { useState, useEffect } from 'react';
import Albums from './components/Albums';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/Detail';
import DumpsterNavbar from './components/DumpsterNavbar';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {


	return (
		<div>
			<Router>
				<DumpsterNavbar />
				<Switch>
					<Route exact path="/" component={Albums} />
					<Route path="/:id" component={Detail} />
				</Switch>
			</Router>
		</div>
	);
};

interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
