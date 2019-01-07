import React, {Component} from 'react';


class Login extends Component  {
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
        <form action="" method="POST">
            <label>
        <span >Username:</span>
            <input
            value = {this.state.username}
            onChange = {this._updateUsername}
            type="text" name="username"></input>
        </label>
        
        <label>
        <span>Password:</span>
            <input 
            value = {this.state.password}
            onChange = {this._updatePassword}
            type="password" name="password"></input>
        </label>
        
        <input type="submit" value="Login"></input>
        </form> 
       
        
        </div>
    )
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