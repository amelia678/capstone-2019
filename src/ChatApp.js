import React from 'react';

import ChatTitle from './ChatTitle';
import ChatMsgList from './ChatMsgList';
import ChatSendMsgForm from './ChatSendMsgForm';

const DUMMY_DATA = [
    {
        senderId: "perborgen",
        text: "who'll win?"
    },
    {
        senderId: "janedoe",
        text: "who'll win?"
    }
]

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: DUMMY_DATA
        }
    }

    render() {
        return (
            <div className="app">
                <ChatTitle />

                <ChatMsgList
                    messages={this.state.messages}
                />

                <ChatSendMsgForm />
            </div>
        )
    }
}

export default ChatApp;