import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={(e) => this._checkCredentials(e)}>
                    <label>
                        <span >Username:</span>
                        <input
                            value={this.state.username}
                            onChange={this._updateUsername}
                            type="text" name="username"></input>
                    </label>

                    <label>
                        <span>Password:</span>
                        <input
                            value={this.state.password}
                            onChange={this._updatePassword}
                            type="password" name="password"></input>
                    </label>

                    <input type="submit" value="Login"></input>
                </form>
                <Link to="register">Not a member yet?</Link>
            </div>
        )
    }

    _checkCredentials = (e) => {
        e.preventDefault();
        axios
            .post('/API/login', this.state)
            .then(r => {
                if (r.data.status === 'incorrect') {
                    alert("Wrong username or password")
                }
                else {
                    this.props.history.push('/profile')
                }
            })
            .catch(err => {
                console.log(err)
            })
        console.log('attemping to log in ...')

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
}
export default Login;