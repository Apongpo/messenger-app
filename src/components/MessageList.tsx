import React from 'react';
import './MessageList.css';

interface Message {
    id: string;
    text: string;
    timestamp: Date;
}

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map(message => (
                <div key={message.id}>
                    <strong>{new Date(message.timestamp).toLocaleTimeString()}: </strong>
                    {message.text}
                </div>
            ))}
        </div>
    );
};

export default MessageList;