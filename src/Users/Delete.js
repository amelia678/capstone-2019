import React from 'react';

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm: false
        }
    }

    render() {
        if (this.state.confirm === false) {
            return (
                <div>
                    <p>Are you sure you want to delete your account?</p>
                    <button
                        onClick={this._deleteAccount}
                    >Yes, I'm sure</button>
                </div>
            )
        } else if (this.state.confirm === true) {
            return (
                <div>
                    <p>Your account has been deleted.<br />
                        We're sorry to see you go, but rock on!</p>
                </div>
            )
        }
    }

    _deleteAccount = () => {
        fetch('/deleteAll')
            .then(() => {
                this.setState({ confirm: true })
                return (
                    <div>
                        <p>Your account has been deleted.<br />
                            We're sorry to see you go, but rock on!</p>
                    </div>
                )
            })
    }
}

export default Delete;