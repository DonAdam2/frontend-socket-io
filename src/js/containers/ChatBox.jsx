import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//selectors
import { getConnectionStatus } from '../store/app/selectors/AppSelectors';
//actions
import { fetchMessages, fetchTypingUsername } from '@/js/store/chat/reducers/ChatReducer';
//components
import ChatWindow from '../components/chat/ChatWindow';
import ChatInputs from '../components/chat/ChatInputs';

const ChatBox = () => {
  const connectionStatus = useSelector((state) => getConnectionStatus({ state })),
    dispatch = useDispatch();

  useEffect(() => {
    if (connectionStatus === 'connected') {
      dispatch(fetchTypingUsername());
      dispatch(fetchMessages());
    }
  }, [connectionStatus, dispatch]);

  return (
    <div className="chat-wrapper">
      <ChatWindow />
      <ChatInputs />
    </div>
  );
};

export default ChatBox;
