import React, {Component} from 'react';


const defaultUser = {
    name: 'amelia',
    username: 'amelia',
    password: 'stacey',
    emailAddress: 'amelia@me.com',
    city: 'decatur',
    state: 'GA'
    

}
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
           ...defaultUser
        }
    }
    render() {
    return (
        <div>
            <h3>Not a member yet? Register an account here:</h3>   
            <form action="" method="POST">
                <label><span class="shadow"> Your name:</span>
                    <input 
                    value= {this.state.name}
                    type="text" name="name"></input>
                </label>
                <label> <span class="shadow">Username:</span>
                <input
                value= {this.state.username}
                 type="text" name="username"></input>
                </label>
                <label><span class="shadow"> Password:</span>
                    <input 
                    value ={this.state.password}
                    type="password" name="password"></input>
                </label>
                <label> <span class="shadow">Email:</span>
                    <input 
                    value= {this.state.emailAddress}
                    type="email" name="email"></input>
                </label>
                
                <label> <span class="shadow">City:</span>
                    <input 
                    value= {this.state.city}
                    type="text" name="city"></input>
                </label>
                 
                <label> <span class="shadow">State:</span>
                    <input 
                    value= {this.state.state}
                    type="text" name="state"></input>
                </label>	
                		
                <label>
                <input type="submit" value="Sign Up!"></input>
                </label>
            </form>
        </div>

    )
    }
}

export default Register;