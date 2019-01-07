import React from 'react';

const Login = (props) => {
    return (
        <div>
            {/* <h2>this is the login</h2> */}
        <form>
            <label>
        <span >Username:</span>
            <input type="text" name="username"></input>
        </label>
        {/* <br> </br> */}
        <label>
        <span>Password:</span>
            <input type="password" name="password"></input>
        </label>
        {/* <br> </br> */}
        <input class="aqua" type="submit" value="Login"></input>
        </form>    
        </div>
    )
}

export default Login;