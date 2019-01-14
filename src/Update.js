import React, { Component } from 'react';
// import { get } from 'https';
import axios from 'axios';
// import {
//     Link
// } from 'react-router-dom';
import SubmitUpdate from './SubmitUpdate';

// make a handleSubmit
// change backend route

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            emailAddress: '',
            home: '',
            likes: '',
            dislikes: '',
            pal: '',
            updateSubmit: false
        }
    }

    componentDidMount() {
        fetch('/profile')

            .then(r => {
                return r.json()
            })
            .then(user => {

                this.setState({
                    id: user.id,
                    username: user.username,
                    name: user.name,
                    emailAddress: user.email,
                    home: user.home,
                    likes: user.likes,
                    dislikes: user.dislikes,
                    pal: user.pal
                })
            })
    }

    render() {

        return (
            <div>
                <h3>Update your information here:</h3>
                <form>
                    <label><span> Your name:</span>
                        <input
                            placeholder={this.state.name}
                            value={this.state.name}
                            onChange={this._updateName}
                            type="text" name="name"></input>
                    </label>

                    <label> <span >Username:</span>
                        <input
                            placeholder={this.state.username}
                            value={this.state.username}
                            onChange={this._updateUsername}
                            type="text" name="username"></input>
                    </label>

                    <label><span > Password:</span>
                        <input
                            placeholder={this.state.password}
                            value={this.state.password}
                            onChange={this._updatePassword}
                            type="password" name="password"></input>
                    </label>

                    <label> <span>Email:</span>
                        <input
                            placeholder={this.state.emailAddress}
                            value={this.state.emailAddress}
                            onChange={this._updateEmail}
                            type="email" name="email"></input>
                    </label>

                    <label> <span>Home:</span>
                        <input
                            placeholder={this.state.home}
                            onChange={this._updateHome}
                            value={this.state.home}
                            type="text" name="home"></input>
                    </label>

                    <label> <span>Likes:</span>
                        <input
                            placeholder={this.state.likes}
                            onChange={this._updateLikes}
                            value={this.state.likes}
                            type="text" name="likes"></input>
                    </label>

                    <label> <span>Dislikes:</span>
                        <input
                            placeholder={this.state.dislikes}
                            onChange={this._updateDislikes}
                            value={this.state.dislikes}
                            type="text" name="dislikes"></input>
                    </label>

                    <label> <span>Are you interested in connecting with another user to attend events with?</span>
                        <input
                            placeholder={this.state.pal}
                            onChange={this._updatePal}
                            value={this.state.pal}
                            type="text" name="pal"></input>
                    </label>

                    <label>
                        <input
                            onClick={() => {
                                this._submitUpdate()
                            }}
                            type="submit" value="Update"></input>
                        {this.state.updateSubmit ? <SubmitUpdate
                            name={(this.state.name)}
                            username={(this.state.username)}
                            password={(this.state.password)}
                            email={(this.state.emailAddress)}
                            home={(this.state.home)}
                            likes={(this.state.likes)}
                            dislikes={(this.state.dislikes)}
                            pal={(this.state.pal)}
                        /> : null
                        }
                    </label>

                </form>

            </div >
        )
    }


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

    _updateLikes = event => {
        this.setState({
            likes: event.target.value
        })
    }

    _updateDislikes = event => {
        this.setState({
            dislikes: event.target.value
        })
    }

    _updatePal = event => {
        this.setState({
            pal: event.target.value
        })
    }

    _checkUsername = (e) => {
        e.preventDefault();
        axios
            .post('/API/register', this.state)
            .then(r => {
                // return r.text()

                console.log(r.data)
                if (r.data.status === 'taken') {
                    alert("Try again music-luver (that username is already taken)")
                }
                else {
                    this.props.history.push('/profile')
                }
            })
            .catch(err => {
                console.log(err)
            })
        console.log('i have been submitted')
    }

    _submitUpdate = () => {
        this.setState({ updateSubmit: true })
    }



}

export default Update;