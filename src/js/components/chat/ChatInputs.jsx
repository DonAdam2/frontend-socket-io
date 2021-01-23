import React, { useState } from 'react';

const ChatInputs = ({ sendMessage }) => {
	const [message, setMessage] = useState(''),
		[username, setUsername] = useState('');

	const messageHandler = ({ target: { value } }) => {
		setMessage(value);
	};

	const usernameHandler = ({ target: { value } }) => {
		setUsername(value);
	};

	const submit = () => {
		sendMessage({ message, handle: username });
	};

	return (
		<div className="chat-inputs">
			<input type="text" value={username} onChange={usernameHandler} />
			<input type="text" value={message} onChange={messageHandler} />
			<button onClick={submit}>Send</button>
		</div>
	);
};

export default ChatInputs;
