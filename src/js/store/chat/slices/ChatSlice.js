import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//socket client
import { socketInstance } from '../../../../index';

const initialState = {
  messageStatus: '', //ideally it should come from the BE
  messages: [],
  typingUsername: '',
};

export const sendMessage = createAsyncThunk('sendMessage', async function ({ message, username }) {
  return await socketInstance.emit('chat', { message, handle: username });
});

export const fetchMessages = createAsyncThunk(
  'fetchMessages',
  async function (_, { getState, dispatch }) {
    console.log('state ', getState());
    return await socketInstance.on('chat', (receivedMessages) =>
      dispatch({ type: 'chat/saveReceivedMessages', payload: { messages: receivedMessages } })
    );
  }
);

export const sendTypingUsername = createAsyncThunk(
  'sendTypingUsername',
  async function ({ username }) {
    return await socketInstance.emit('typing', username);
  }
);

export const fetchTypingUsername = createAsyncThunk(
  'fetchTypingUsername',
  async function (_, { dispatch }) {
    return await socketInstance.on('typing', (username) =>
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
      state.messageStatus = 'Sending';
    });
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.messageStatus = 'Sent successfully';
    });
    builder.addCase(sendMessage.rejected, (state) => {
      state.messageStatus = 'Send failed';
    });
    builder.addCase(fetchMessages.pending, () => {
      // state.connectionStatus = 'disconnecting';
    });
    builder.addCase(fetchMessages.fulfilled, () => {
      // state.connectionStatus = 'disconnected';
    });
    builder.addCase(fetchMessages.rejected, () => {
      // state.connectionStatus = 'disconnection failed';
    });
    builder.addCase(sendTypingUsername.pending, () => {
      // state.connectionStatus = 'disconnecting';
    });
    builder.addCase(sendTypingUsername.fulfilled, () => {
      // state.connectionStatus = 'disconnected';
    });
    builder.addCase(sendTypingUsername.rejected, () => {
      // state.connectionStatus = 'disconnection failed';
    });
    builder.addCase(fetchTypingUsername.pending, () => {
      // state.connectionStatus = 'disconnecting';
    });
    builder.addCase(fetchTypingUsername.fulfilled, () => {
      // state.connectionStatus = 'disconnected';
    });
    builder.addCase(fetchTypingUsername.rejected, () => {
      // state.connectionStatus = 'disconnection failed';
    });
  },
});
export default chatSlice.reducer;

/*const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
    case FETCH_MESSAGES_SUCCESS:
    case FETCH_MESSAGES_FAIL:
    case SEND_TYPING_USERNAME:
    case FETCH_TYPING_USERNAME:
    case FETCH_TYPING_USERNAME_FAILED:
    case FETCH_TYPING_USERNAME_SUCCESS: {
      return state;
    }
    case SEND_MESSAGE: {
      return updateObject(state, { messageStatus: 'Sending' });
    }
    case SEND_MESSAGE_SUCCESS: {
      console.log(action.result);
      return updateObject(state, { messageStatus: 'Sent' });
    }
    case SEND_MESSAGE_FAIL: {
      console.log(action.error);
      return updateObject(state, { messageStatus: 'Failed' });
    }
    case SAVE_RECEIVED_MESSAGES: {
      const messages = cloneDeep(state.messages);
      messages.push(action.messages);
      return updateObject(state, { messages, typingUsername: '' });
    }
    case SAVE_RECEIVED_TYPING_USERNAME: {
      return updateObject(state, { typingUsername: action.username });
    }
    default:
      return state;
  }
};

export default reducer;*/
