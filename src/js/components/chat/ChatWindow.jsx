import React from 'react';
import Message from './Message';

const ChatWindow = ({ messages, feedback }) => (
	<div className="chat-window">
		<div className="output">
			{messages.map((el, i) => (
				<Message key={i} username={el.handle} content={el.message} />
			))}
		</div>
		<p className="feedback">
			<em>{feedback} is typing a message ...!</em>
		</p>
	</div>
);

export default ChatWindow;
