import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//selectors
import { getTypingUsername, getMessages } from '../../store/chat/selectors/ChatSelectors';
//components
import Message from './Message';
import { fetchMessages, fetchIsTyping } from '../../store/chat/actions/ChatActions';
import { getConnectionStatus } from '../../store/app/selectors/AppSelectors';

const ChatWindow = () => {
	const messages = useSelector((state) => getMessages({ state })),
		typingUsername = useSelector((state) => getTypingUsername({ state })),
		connectionStatus = useSelector((state) => getConnectionStatus({ state })),
		dispatch = useDispatch();

	useEffect(() => {
		if (connectionStatus === 'connected') {
			dispatch(fetchIsTyping());
			dispatch(fetchMessages());
		}
	}, [connectionStatus]);

	return (
		<div className="chat-window">
			{messages.length > 0 && (
				<div className="output">
					{messages.map((el, i) => (
						<Message key={i} username={el.handle} content={el.message} />
					))}
				</div>
			)}
			{typingUsername && (
				<p className="feedback">
					<em>{typingUsername} is typing a message ...!</em>
				</p>
			)}
		</div>
	);
};

export default ChatWindow;
