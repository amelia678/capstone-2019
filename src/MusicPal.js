import React, {Component} from 'react';
import Search from './Search';
import Profile from './Profile';

class MusicPal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events : [
                'Drake',
                'Sylvan Esso',
                'Amelia',
                'Migos'
            ],
            searchTerm: '',

        }
    }

    render() {
        return (
            <div className="userView">
            <Search
            searchTerm={this.state.searchTerm}
            handleInput = {this._setSearchTerm}/>
            <Profile />
            </div>
        )
    }

    _setSearchTerm = (term) => {
        this.setState({
            searchTerm: term
        })
    }
}

export default MusicPal;