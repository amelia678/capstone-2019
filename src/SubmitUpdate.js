import React from 'react';

class SubmitUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        fetch('/updateUser', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                name: this.props.name,
                username: this.props.username,
                email: this.props.email,
                password: this.props.password,
                home: this.props.home,
                likes: this.props.likes,
                dislikes: this.props.dislikes,
                pal: this.props.pal
            }),
        })
    };

    render() {
        return (
            <p>You have successfully updated your information. Now go find some concerts!</p>
        )
    }
}

export default SubmitUpdate;