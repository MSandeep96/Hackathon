import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import getLeaderboard from '../../actions/LeadearBoard';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';



export default class LeaderBoard extends Component {
	state = {
		users : [],
		isLoading : true
	}
	componentWillMount(){
		getLeaderboard()
		.then((docs) => {
			console.log(docs);		
			this.setState({
				users: docs,
				isLoading: false
			});
		});
	}

	showLoader = () => {
		return this.state.isLoading ? <CircularProgress /> : null;
	}

	showLeaderBoard = () => {
		if(this.state.isLoading)
			return;
		console.log(this.state.users);
		return this.state.users.map( (user) => {
			return (
				<Card key={user.username}>
					<CardContent>
						<Typography component = "h2">Name: {user.username}</Typography>
						<Typography component = "h3">Best Moves: {user.bestMoves}</Typography>
						<Typography component = "h3">Best Time: {user.bestTime}</Typography>
					</CardContent>
				</Card>
				);
			}
		);
	}

	render() {
    	return (
      		<div>
						{this.showLoader()}
						{this.showLeaderBoard()}
      		</div>
    	)
  	}
}

