import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//socket client
import { socketInstance } from '../../../../index';
import { appSocketMessages, backendSocketEvents } from '@/js/constants/Constants';

const initialState = {
  messageStatus: '', //ideally it should come from the BE
  messages: [],
  typingUsername: '',
};

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

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    saveReceivedMessages: (state, action) => {
      state.messages.push(action.payload.messages);
      state.typingUsername = '';
    },
    saveReceivedTypingUsername: (state, action) => {
      state.typingUsername = action.payload.username;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessage.pending, (state) => {
      state.messageStatus = appSocketMessages.messageStatus.pending;
    });
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.messageStatus = appSocketMessages.messageStatus.fulfilled;
    });
    builder.addCase(sendMessage.rejected, (state) => {
      state.messageStatus = appSocketMessages.messageStatus.rejected;
    });
    builder.addCase(fetchMessages.pending, () => {
      // add the required logic
    });
    builder.addCase(fetchMessages.fulfilled, () => {
      // add the required logic
    });
    builder.addCase(fetchMessages.rejected, () => {
      // add the required logic
    });
    builder.addCase(sendTypingUsername.pending, () => {
      // add the required logic
    });
    builder.addCase(sendTypingUsername.fulfilled, () => {
      // add the required logic
    });
    builder.addCase(sendTypingUsername.rejected, () => {
      // add the required logic
    });
    builder.addCase(fetchTypingUsername.pending, () => {
      // state.connectionStatus = 'disconnecting';
    });
    builder.addCase(fetchTypingUsername.fulfilled, () => {
      // add the required logic
    });
    builder.addCase(fetchTypingUsername.rejected, () => {
      // add the required logic
    });
  },
});
export default chatSlice.reducer;
