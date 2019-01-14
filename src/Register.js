import React, { Component } from 'react';
// import { get } from 'https';
import axios from 'axios';
import {
    Link
} from 'react-router-dom';

// make a handleSubmit
// change backend route

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            emailAddress: '',
            home: '',
            likes: '',
            dislikes: '',
            pal: ''
        }
    }


    render() {

        return (
            <div className="login">
                <h3>Register an account here:</h3>
                <form onSubmit={(e) => this._checkUsername(e)} >

                    <label><span> Your name:</span>
                        <input
                            value={this.state.name}
                            onChange={this._updateName}
                            type="text" name="name"></input>
                    </label>

                    <label> <span >Username:</span>
                        <input
                            value={this.state.username}
                            onChange={this._updateUsername}
                            type="text" name="username"></input>
                    </label>

                    <label><span > Password:</span>
                        <input
                            value={this.state.password}
                            onChange={this._updatePassword}
                            type="password" name="password"></input>
                    </label>

                    <label> <span>Email:</span>
                        <input
                            value={this.state.emailAddress}
                            onChange={this._updateEmail}
                            type="email" name="email"></input>
                    </label>

                    <label> <span>Home:</span>
                        <input
                            onChange={this._updateHome}
                            value={this.state.home}
                            type="text" name="home"></input>
                    </label>

                    <label> <span>Likes:</span>
                        <input
                            onChange={this._updateLikes}
                            value={this.state.likes}
                            type="text" name="likes"></input>
                    </label>

                    <label> <span>Dislikes:</span>
                        <input
                            onChange={this._updateDislikes}
                            value={this.state.dislikes}
                            type="text" name="dislikes"></input>
                    </label>

                    <label> <span>Are you interested in connecting with another user to attend events with?</span>
                        <input
                            onChange={this._updatePal}
                            value={this.state.pal}
                            type="text" name="pal"></input>
                    </label>

                    <label>
                        <input

                            type="submit" value="Sign Up!"></input>
                    </label>

                </form>
                <Link to="/login">Already a member?</Link>
            </div>
        )
    }


    _updateName = event => {
        this.setState({
            name: event.target.value
        })
    }

    _updateUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    _updatePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    _updateEmail = event => {
        this.setState({
            emailAddress: event.target.value
        })
    }

    _updateHome = event => {
        this.setState({
            home: event.target.value
        })
    }

    _updateLikes = event => {
        this.setState({
            likes: event.target.value
        })
    }

    _updateDislikes = event => {
        this.setState({
            dislikes: event.target.value
        })
    }

    _updatePal = event => {
        this.setState({
            pal: event.target.value
        })
    }

    _checkUsername = (e) => {
        e.preventDefault();
        axios
            .post('/API/register', this.state)
            .then(r => {
                // return r.text()

                console.log(r.data)
                if (r.data.status === 'taken') {
                    alert("Try again music-luver (that username is already taken)")
                }
                else {
                    this.props.history.push('/profile')
                }
            })
            .catch(err => {
                console.log(err)
            })
        console.log('i have been submitted')
    }



}

export default Register;