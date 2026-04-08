import { createSocketService } from './createSocketService';

export const chatSocket = createSocketService({
  url: process.env.SOCKET_HOST,
});

// Example: add more socket services as needed
//
// export const forexSocket = createSocketService({
//   url: process.env.FOREX_SOCKET_HOST,
//   options: { transports: ['websocket'] },
//   auth: () => ({ token: localStorage.getItem('forex_token') }),
// });
