import { createAsyncThunk } from '@reduxjs/toolkit';
import { chatSocket } from '@/js/services/sockets';

export const connectToSocket = createAsyncThunk('connectToSocket', function () {
  return chatSocket.connect();
});

export const disconnectFromSocket = createAsyncThunk('disconnectFromSocket', function () {
  return chatSocket.disconnect();
});
