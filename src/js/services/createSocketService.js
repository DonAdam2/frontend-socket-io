import SocketClient from './SocketClient';

/**
 * Factory that returns a self-contained socket service bound to a URL and
 * optional socket.io client options. Each call produces an independent
 * connection — no shared singletons.
 *
 * @param {object}            config
 * @param {string}            config.url       - Socket server URL
 * @param {object}            [config.options]  - socket.io-client options (reconnection, transports, etc.)
 * @param {object|Function}   [config.auth]     - Static auth payload or function that returns one at connect-time
 *
 * @example
 *   // chat service
 *   export const chatSocket = createSocketService({
 *     url: process.env.SOCKET_HOST,
 *   });
 *
 *   // forex feed with auth
 *   export const forexSocket = createSocketService({
 *     url: process.env.FOREX_SOCKET_HOST,
 *     auth: () => ({ token: getAuthToken() }),
 *     options: { transports: ['websocket'] },
 *   });
 */
export function createSocketService({ url, options = {}, auth } = {}) {
  const client = new SocketClient();

  return {
    connect(overrides = {}) {
      const connectUrl = overrides.url || url;
      const connectOptions = { ...options, ...overrides.options };

      if (auth) {
        connectOptions.auth = typeof auth === 'function' ? auth() : auth;
      }

      return client.connect(connectUrl, connectOptions);
    },
    disconnect: () => client.disconnect(),
    emit: (event, data) => client.emit(event, data),
    on: (event, fun) => client.on(event, fun),
    off: (event, fun) => client.off(event, fun),
    get connected() {
      return client.connected;
    },
    get socket() {
      return client.socket;
    },
  };
}
