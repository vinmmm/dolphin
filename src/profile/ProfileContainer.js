import React, { Component } from 'react';

class AddProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			bio: '',
			hobby: ''
		}
		this.handleName = this.handleName.bind(this)
		this.handleBio = this.handleBio.bind(this)
		this.handleHobby = this.handleHobby.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleName(e) {
		this.setState({
			name: e.target.value
		})
	}
	
	handleBio(e) {
		this.setState({
			bio: e.target.value
		})
	}
	
	handleHobby(e) {
		this.setState({
			hobby: e.target.value
		})
	}
	
    handleClick(e) {
    	let newProfile = {
    		name: this.state.name,
    		bio: this.state.bio,
    		hobbies: [this.state.hobby]
    	}
    	this.props.addUser(newProfile)
    }

	render() {
		return(
		<div>
		<p>Add a new profile</p>
	    {/*<span>{this.state.name}</span>*/}
		
		<input onChange={this.handleName} value={this.state.name} />
		<input onChange={this.handleBio} value={this.state.bio} />
		<input onChange={this.handleHobby} value={this.state.hobby} />
		<button onClick={this.handleClick}>add new profile</button>
		</div>
		)
	}

}


class Profile extends Component {
	render() {
		let hobbies = this.props.hobbies.map(hobby => {
			return <li>{hobby}</li>
		})
		return (
			<div>
			<h3>{this.props.name}</h3>
			<p>
			{this.props.name} is {this.props.age} and {this.props.bio}
			</p>
			<h3>Hobbies</h3>
			<ul>
			{hobbies}
			</ul>
			</div>
			)
	}
}


class ProfileContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profiles: [
			{
				name: 'Janine',
				age: 43,
				bio: ' an actress from LA',
				hobbies: ['snow skiing', 'trance music']

			},

			{
				name: 'Elvis',
				age: 44,
				bio: ' a musician from TN',
				hobbies: ['enjoys amusement parks', 'cadillacs', 'guns']

			}


			 ]
		}
		this.addUser = this.addUser.bind(this)
	}

	addUser(newProfile) {
		this.setState({
			profiles: this.state.profiles.concat([newProfile])
		})
	}

	render() {
		let profiles = this.state.profiles.map(profile => {
			return (
				<Profile
				name={profile.name}
				age={profile.name}
				bio={profile.bio}
				hobbies={profile.hobbies} />
				)
		})
		return (
			<div>
			{profiles}
			<AddProfile addUser={this.addUser} />
			</div>
			)
	}
}

export default ProfileContainer;
