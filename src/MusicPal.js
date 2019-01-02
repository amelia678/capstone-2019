import React, {Component} from 'react';
import Search from './Search';
import Profile from './Profile';

class MusicPal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="userView">
            <Search />
            <Profile />
            </div>
        )
    }
}

export default MusicPal;