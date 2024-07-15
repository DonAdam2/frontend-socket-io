import { createSlice } from '@reduxjs/toolkit';
//constants
import { appSocketMessages } from '@/js/constants/Constants';
//async actions
import { connectToSocket, disconnectFromSocket } from '@/js/store/app/asyncActions/AppAsyncActions';

const initialState = {
  connectionStatus: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //connectToSocket
    builder
      .addCase(connectToSocket.pending, (state) => {
        state.connectionStatus = appSocketMessages.connectionStatus.pending;
      })
      .addCase(connectToSocket.fulfilled, (state) => {
        state.connectionStatus = appSocketMessages.connectionStatus.fulfilled;
      })
      .addCase(connectToSocket.rejected, (state) => {
        state.connectionStatus = appSocketMessages.connectionStatus.rejected;
      });
    //disconnectFromSocket
    builder
      .addCase(disconnectFromSocket.pending, (state) => {
        state.connectionStatus = appSocketMessages.disconnectionStatus.pending;
      })
      .addCase(disconnectFromSocket.fulfilled, (state) => {
        state.connectionStatus = appSocketMessages.disconnectionStatus.fulfilled;
      })
      .addCase(disconnectFromSocket.rejected, (state) => {
        state.connectionStatus = appSocketMessages.disconnectionStatus.rejected;
      });
  },
});
export default appSlice.reducer;
