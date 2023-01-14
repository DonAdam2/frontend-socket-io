import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//socket client
import { socketInstance } from '../../../../index';
//constants
import { appSocketMessages } from '@/js/constants/Constants';

const initialState = {
  connectionStatus: '',
};

export const connectToSocket = createAsyncThunk('connectToSocket', async function () {
  return await socketInstance.connect();
});

export const disconnectFromSocket = createAsyncThunk('disconnectFromSocket', async function () {
  return await socketInstance.disconnect();
});

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(connectToSocket.pending, (state) => {
      state.connectionStatus = appSocketMessages.connectionStatus.pending;
    });
    builder.addCase(connectToSocket.fulfilled, (state) => {
      state.connectionStatus = appSocketMessages.connectionStatus.fulfilled;
    });
    builder.addCase(connectToSocket.rejected, (state) => {
      state.connectionStatus = appSocketMessages.connectionStatus.rejected;
    });
    builder.addCase(disconnectFromSocket.pending, (state) => {
      state.connectionStatus = appSocketMessages.disconnectionStatus.pending;
    });
    builder.addCase(disconnectFromSocket.fulfilled, (state) => {
      state.connectionStatus = appSocketMessages.disconnectionStatus.fulfilled;
    });
    builder.addCase(disconnectFromSocket.rejected, (state) => {
      state.connectionStatus = appSocketMessages.disconnectionStatus.rejected;
    });
  },
});
export default appSlice.reducer;
