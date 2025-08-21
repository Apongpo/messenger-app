import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import { Message } from './types';

const App: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = (text: string) => {
        const newMessage: Message = {
            id: (messages.length + 1).toString(),
            text,
            timestamp: new Date(),
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div>
            <ChatWindow>
                <MessageList messages={messages} />
                <MessageInput onSend={sendMessage} />
            </ChatWindow>
        </div>
    );
};

export default App;