import { SEND_MESSAGE, SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS } from '../chatActionTypes';

export const sendMessage = ({ message, username }) => ({
	type: 'socket',
	//types: [SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL], //removing success and fail because the current backend doesn't support it
	types: [SEND_MESSAGE],
	promise: (socket) => socket.emit('chat', { message, handle: username }),
});
