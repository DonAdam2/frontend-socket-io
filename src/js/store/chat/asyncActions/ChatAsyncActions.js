import { createAsyncThunk } from '@reduxjs/toolkit';
import { chatSocket } from '@/js/services/sockets';
import { backendSocketEvents } from '@/js/constants/Constants';
import { getCurrentUsername } from '@/js/store/chat/selectors/ChatSelectors';

export const sendMessage = createAsyncThunk(
  'sendMessage',
  async function ({ message, username }, { dispatch }) {
    dispatch({
      type: 'chat/saveReceivedMessages',
      payload: { messages: { message, handle: username }, isMine: true },
    });
    await chatSocket.emit(backendSocketEvents.emit.chat, { message, handle: username });
  }
);

export const fetchMessages = createAsyncThunk(
  'fetchMessages',
  async function (_, { getState, dispatch }) {
    return chatSocket.on(backendSocketEvents.on.chat, (receivedMessages) => {
      const currentUsername = getCurrentUsername({ state: getState() });
      if (receivedMessages.handle === currentUsername) return;
      dispatch({ type: 'chat/saveReceivedMessages', payload: { messages: receivedMessages } });
    });
  }
);

export const sendTypingUsername = createAsyncThunk(
  'sendTypingUsername',
  async function ({ username }) {
    return await chatSocket.emit(backendSocketEvents.emit.typing, username);
  }
);

export const fetchTypingUsername = createAsyncThunk(
  'fetchTypingUsername',
  async function (_, { dispatch }) {
    return chatSocket.on(backendSocketEvents.on.typing, (username) =>
      dispatch({ type: 'chat/saveReceivedTypingUsername', payload: { username: username } })
    );
  }
);
