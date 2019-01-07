import React from 'react';

const Login = (props) => {
    return (
        <div>
        <form action="" method="POST">
            <label>
        <span >Username:</span>
            <input type="text" name="username"></input>
        </label>
        
        <label>
        <span>Password:</span>
            <input type="password" name="password"></input>
        </label>
        
        <input class="aqua" type="submit" value="Login"></input>
        </form> 
        <h3>Not a member yet? Register an account here:</h3>   
            <form action="" method="POST">
                <label><span class="shadow"> Your name:</span>
                    <input type="text" name="name"></input>
                </label>
                <label> <span class="shadow">Username:</span>
                <input type="text" name="username"></input>
                </label>
                <label><span class="shadow"> Password:</span>
                    <input type="password" name="password"></input>
                </label>
                <label> <span class="shadow">Email:</span>
                    <input type="email" name="email"></input>
                </label>
                
                <label> <span class="shadow">City:</span>
                    <input type="text" name="city"></input>
                </label>
                 
                <label> <span class="shadow">State:</span>
                    <input type="text" name="state"></input>
                </label>	
                		
                <label>
                <input type="submit" value="Sign Up!"></input>
                </label>
            </form>
        </div>
    )
}

export default Login;