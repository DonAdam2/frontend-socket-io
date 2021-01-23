import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//actions
import { sendMessage } from '../../store/chat/actions/ChatActions';

const ChatInputs = () => {
	const [message, setMessage] = useState(''),
		[username, setUsername] = useState(''),
		dispatch = useDispatch();

	const messageHandler = ({ target: { value } }) => {
		setMessage(value);
	};

	const usernameHandler = ({ target: { value } }) => {
		setUsername(value);
	};

	const submit = () => {
		dispatch(sendMessage({ message, username }));
		setMessage('');
	};

	return (
		<div className="chat-inputs">
			<input
				type="text"
				value={username}
				onChange={usernameHandler}
				placeholder="Enter your username..."
			/>
			<input
				type="text"
				value={message}
				onChange={messageHandler}
				placeholder="Enter your message..."
			/>
			<button onClick={submit} disabled={!username || !message}>
				Send
			</button>
		</div>
	);
};

export default ChatInputs;
