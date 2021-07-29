import * as React from 'react';
import { useState, useEffect } from 'react';
import DumpsterTimeline from './DumpsterTimeline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './Detail';
import DumpsterNavbar from './DumpsterNavbar';
import DumpsterBoards from './DumpsterBoards';
import DumpsterBoardsMusic from './DumpsterBoardsMusic';
import { nameProps } from "../utils/types";

/* HOOK REACT EXAMPLE */
const DumpsterMain: React.FC<nameProps> = (props) => {


	return (
		<div>
			<Router>
				<DumpsterNavbar />
				<Switch>
					<Route exact path="/" >
						<DumpsterTimeline username={props.username} nickName={props.nickName}/>
					</Route>
					
					<Route exact path="/boards">
						<DumpsterBoards username={props.username} nickName={props.nickName}/>
					</Route>

					<Route exact path="/boards/music">
						<DumpsterBoardsMusic username={props.username} nickName={props.nickName} />
					</Route>

					<Route exact path="/:id">
						<Detail />
					</Route>
					
				</Switch>
				

			</Router>
		</div>
	);
};

interface DumpsterMainProps { username }

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

export default DumpsterMain;
