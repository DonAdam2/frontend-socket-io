import React from 'react';
import { useSelector } from 'react-redux';
//selectors
import { getFeedback, getMessages } from '../../store/chat/selectors/ChatSelectors';
//components
import Message from './Message';

const ChatWindow = () => {
	const messages = useSelector((state) => getMessages({ state })),
		feedback = useSelector((state) => getFeedback({ state }));

	return (
		<div className="chat-window">
			{messages.length > 0 && (
				<div className="output">
					{messages.map((el, i) => (
						<Message key={i} username={el.handle} content={el.message} />
					))}
				</div>
			)}
			{feedback && (
				<p className="feedback">
					<em>{feedback} is typing a message ...!</em>
				</p>
			)}
		</div>
	);
};

export default ChatWindow;
