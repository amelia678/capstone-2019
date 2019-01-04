import React from 'react';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myInfo: [],
        }
    }

    componentDidMount() {
        fetch('/myInfo')
            .then(r => r.json())
            .then(infoArray => {
                this.setState({
                    myInfo: infoArray
                })
            })
    };

    render() {

        const infoList = this.state.myInfo.map(user => {
            return (
                <li key={user.id}>{user.username, user.city, user.state}</li>
            )
        })

        return (
            <div>
                <p>About Me:</p>
                <ul>
                    {infoArray}
                </ul>
            </div>
        )
    }
}

export default AboutMe;