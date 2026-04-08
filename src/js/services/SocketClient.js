import { io } from 'socket.io-client';

/**
 * Low-level promise-based wrapper around a single socket.io-client connection.
 * Each instance manages its own socket — no shared singletons.
 *
 * Not meant to be used directly by feature code. Use {@link createSocketService}
 * from `createSocketService.js` to get a pre-configured service instead.
 *
 * @example
 *   const client = new SocketClient();
 *   await client.connect('http://localhost:4000', { transports: ['websocket'] });
 *   await client.emit('chat', { message: 'hello' });
 *   await client.on('chat', (msg) => console.log(msg));
 *   client.off('chat');
 *   await client.disconnect();
 */
class SocketClient {
  socket = null;

  connect(url, options = {}) {
    this.socket = io(url, options);
    return new Promise((resolve, reject) => {
      this.socket.on('connect', () => resolve());
      this.socket.on('connect_error', (error) => reject(error));
    });
  }

  disconnect() {
    return new Promise((resolve) => {
      if (!this.socket) return resolve();
      this.socket.disconnect(() => {
        this.socket = null;
        resolve();
      });
    });
  }

  emit(event, data) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject('No socket connection.');

      return this.socket.emit(event, data, (response) => {
        if (response.error) {
          console.error(response.error);
          return reject(response.error);
        }

        return resolve();
      });
    });
  }

  on(event, fun) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject('No socket connection.');

      this.socket.on(event, fun);
      resolve();
    });
  }

  off(event, fun) {
    if (!this.socket) return;
    this.socket.off(event, fun);
  }

  get connected() {
    return this.socket?.connected ?? false;
  }
}

export default SocketClient;
