import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow: React.FC = () => {
    const [messages, setMessages] = React.useState<{ id: number; text: string; timestamp: Date }[]>([]);
    
    const handleSendMessage = (text: string) => {
        const newMessage = {
            id: messages.length + 1,
            text,
            timestamp: new Date(),
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="chat-window">
            <MessageList messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatWindow;