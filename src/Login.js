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
       
        
        </div>
    )
}

export default Login;