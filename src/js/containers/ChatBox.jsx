import React from 'react';
//components
import ChatWindow from '../components/chat/ChatWindow';
import ChatInputs from '../components/chat/ChatInputs';

const ChatBox = () => {
	return (
		<div className="chat-wrapper">
			<ChatWindow />
			<ChatInputs />
		</div>
	);
};

export default ChatBox;
