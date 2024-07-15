import { createAsyncThunk } from '@reduxjs/toolkit';
//socket client
import { socketInstance } from '../../../../index';
//constants
import { backendSocketEvents } from '@/js/constants/Constants';

export const sendMessage = createAsyncThunk('sendMessage', async function ({ message, username }) {
  return await socketInstance.emit(backendSocketEvents.emit.chat, { message, handle: username });
});

export const fetchMessages = createAsyncThunk(
  'fetchMessages',
  async function (_, { getState, dispatch }) {
    console.log('state ', getState());
    return await socketInstance.on(backendSocketEvents.on.chat, (receivedMessages) =>
      dispatch({ type: 'chat/saveReceivedMessages', payload: { messages: receivedMessages } })
    );
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
