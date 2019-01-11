import React, { Component } from 'react';
import { get } from 'https';
import axios from 'axios';
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

                    <label> <span class="shadow">Home:</span>
                        <input
                            onChange={this._updateHome}
                            value={this.state.home}
                            type="text" name="home"></input>
                    </label>

                    <label>
                        <input 
                        onSubmit={this._checkUsername}
                        type="submit" value="Sign Up!"></input>
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

    _updateHome = event => {
        this.setState({
            home: event.target.value
        })
    }

    _checkUsername = (e) => {
        e.preventDefault();
        axios
        .post('/registerAPI/', this.state)
        .then(r => {
            // return r.text()
            
            console.log(r.data)
            })
        // .then(r => {
        //     if (r.status === "taken") {
        //         alert("That username already exists")
        //     }
        // })
    }
    
  
    
}

export default Register;