import { createAsyncThunk } from '@reduxjs/toolkit';
//socket client
import { socketInstance } from '../../../../index';

export const connectToSocket = createAsyncThunk('connectToSocket', async function () {
  return await socketInstance.connect();
});

export const disconnectFromSocket = createAsyncThunk('disconnectFromSocket', async function () {
  return await socketInstance.disconnect();
});
