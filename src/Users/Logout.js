import React from 'react'

const Logout = (props) => {
    return(
        <div>
            <h3>Thanks for using MusicPal</h3>
            <form action="/logout" method="POST">
                <input type="submit" value="logout"></input>
        
            </form>
        </div>

    )
}

export default Logout;