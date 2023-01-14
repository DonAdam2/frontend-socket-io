import { useSelector } from 'react-redux';
//selectors
import { getTypingUsername, getMessages } from '@/js/store/chat/selectors/ChatSelectors';
//components
import Message from './Message';

const ChatWindow = () => {
  const messages = useSelector((state) => getMessages({ state })),
    typingUsername = useSelector((state) => getTypingUsername({ state }));

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
