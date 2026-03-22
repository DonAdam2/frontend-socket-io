import { createAsyncThunk } from '@reduxjs/toolkit';
//socket client
import { socketInstance } from '../../../../index';
//constants
import { backendSocketEvents } from '@/js/constants/Constants';
import { getCurrentUsername } from '@/js/store/chat/selectors/ChatSelectors';

export const sendMessage = createAsyncThunk(
  'sendMessage',
  async function ({ message, username }, { dispatch }) {
    dispatch({
      type: 'chat/saveReceivedMessages',
      payload: { messages: { message, handle: username }, isMine: true },
    });
    socketInstance.emit(backendSocketEvents.emit.chat, { message, handle: username });
  }
);

export const fetchMessages = createAsyncThunk(
  'fetchMessages',
  async function (_, { getState, dispatch }) {
    const state = getState();
    console.log('state ', getState());
    return socketInstance.on(backendSocketEvents.on.chat, (receivedMessages) => {
      const currentUsername = getCurrentUsername({ state });
      //skip the sender's own echo since it was already added locally
      if (receivedMessages.handle === currentUsername) return;
      dispatch({ type: 'chat/saveReceivedMessages', payload: { messages: receivedMessages } });
    });
  }
);

export const sendTypingUsername = createAsyncThunk(
  'sendTypingUsername',
  async function ({ username }) {
    return await socketInstance.emit(backendSocketEvents.emit.typing, username);
  }
);

export const fetchTypingUsername = createAsyncThunk(
  'fetchTypingUsername',
  async function (_, { dispatch }) {
    return await socketInstance.on(backendSocketEvents.on.typing, (username) =>
      dispatch({ type: 'chat/saveReceivedTypingUsername', payload: { username: username } })
    );
  }
);
