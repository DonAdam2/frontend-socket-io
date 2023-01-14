export const appSocketMessages = {
  connectionStatus: {
    pending: 'connecting',
    fulfilled: 'connected',
    rejected: 'connection failed',
  },
  disconnectionStatus: {
    pending: 'disconnecting',
    fulfilled: 'disconnected',
    rejected: 'disconnection failed',
  },
  messageStatus: {
    pending: 'Sending',
    fulfilled: 'Sent successfully',
    rejected: 'Send failed',
  },
};

export const backendSocketEvents = {
  emit: {
    chat: 'chat',
    typing: 'typing',
  },
  on: {
    chat: 'chat',
    typing: 'typing',
  },
};
