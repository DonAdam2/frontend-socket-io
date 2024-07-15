import { createSlice } from '@reduxjs/toolkit';
//constants
import { appSocketMessages } from '@/js/constants/Constants';
//async actions
import {
  fetchMessages,
  fetchTypingUsername,
  sendMessage,
  sendTypingUsername,
} from '@/js/store/chat/asyncActions/ChatAsyncActions';

const initialState = {
  messageStatus: '', //ideally it should come from the BE
  messages: [],
  typingUsername: '',
};

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
    //sendMessage
    builder
      .addCase(sendMessage.pending, (state) => {
        state.messageStatus = appSocketMessages.messageStatus.pending;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.messageStatus = appSocketMessages.messageStatus.fulfilled;
      })
      .addCase(sendMessage.rejected, (state) => {
        state.messageStatus = appSocketMessages.messageStatus.rejected;
      });
    //fetchMessages
    builder
      .addCase(fetchMessages.pending, () => {
        // add the required logic
      })
      .addCase(fetchMessages.fulfilled, () => {
        // add the required logic
      })
      .addCase(fetchMessages.rejected, () => {
        // add the required logic
      });
    //sendTypingUsername
    builder
      .addCase(sendTypingUsername.pending, () => {
        // add the required logic
      })
      .addCase(sendTypingUsername.fulfilled, () => {
        // add the required logic
      })
      .addCase(sendTypingUsername.rejected, () => {
        // add the required logic
      });
    //fetchTypingUsername
    builder
      .addCase(fetchTypingUsername.pending, () => {
        // state.connectionStatus = 'disconnecting';
      })
      .addCase(fetchTypingUsername.fulfilled, () => {
        // add the required logic
      })
      .addCase(fetchTypingUsername.rejected, () => {
        // add the required logic
      });
  },
});

export const { saveReceivedMessages, saveReceivedTypingUsername } = chatSlice.actions;
export default chatSlice.reducer;
