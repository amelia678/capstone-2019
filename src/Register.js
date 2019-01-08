import React, { Component } from 'react';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            emailAddress: '',
            city: '',
            state: ''
        }
    }

    render() {

        return (
            <div>
                <h3>Not a member yet? Register an account here:</h3>
                <form action="" method="POST">

                    <label><span class="shadow"> Your name:</span>
                        <input
                            value={this.state.name}
                            onChange={this._updateName}
                            type="text" name="name"></input>
                    </label>

                    <label> <span class="shadow">Username:</span>
                        <input
                            value={this.state.username}
                            onChange={this._updateUsername}
                            type="text" name="username"></input>
                    </label>

                    <label><span class="shadow"> Password:</span>
                        <input
                            value={this.state.password}
                            onChange={this._updatePassword}
                            type="password" name="password"></input>
                    </label>

                    <label> <span class="shadow">Email:</span>
                        <input
                            value={this.state.emailAddress}
                            onChange={this._updateEmail}
                            type="email" name="email"></input>
                    </label>

                    <label> <span class="shadow">City:</span>
                        <input
                            onChange={this._updateCity}
                            value={this.state.city}
                            type="text" name="city"></input>
                    </label>

                    <label> <span class="shadow">State:</span>
                        <input
                            onChange={this._updateState}
                            value={this.state.state}
                            type="text" name="state"></input>
                    </label>

                    <label>
                        <input type="submit" value="Sign Up!"></input>
                    </label>

                </form>
            </div>
        )
    }

    // _resetForm = () => {
    //     this.setState({
    //         ...defaultUser
    //     })
    // }

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

    _updatePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    _updateCity = event => {
        this.setState({
            city: event.target.value
        })
    }

    _updateState = event => {
        this.setState({
            state: event.target.value
        })
    }
}

export default Register;