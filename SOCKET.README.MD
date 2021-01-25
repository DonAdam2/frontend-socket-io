# Project idea:
The main idea is to separate actions from the middleware, and even the socket client from the middleware. Resulting the following:
- **Types** -> REQUEST (mandatory), SUCCESS (not mandatory), FAILURE (not mandatory).
- **Reducer** -> to store different states and data from (socket.on)
- **Actions** -> send actions to connect / disconnect / emit / listen. (socket is a **parametrized function** in action promise, so that we can share the same socket instance throughout the whole application)
- **Socket middle ware** (src/js/store/middleWares/SocketMiddleWare.js) -> to dispatch your actions, and pass or not the current action to the socket client
- **Socket client** (src/js/services/SocketClient.js) -> socket client which will be the only one that will ever load and manage the socket.io-client..

## Information about the custom socket io middle ware:
- It will be responsible for processing only socket requests.
- It passes the action onto the socket client, and dispatches:

  1. REQUEST (action types[0]): **on requesting** (**action.type** is sent to reducer).
  1. SUCCESS (action types[1]): **on request success** (**action.type** and server response as **action.result** are sent to reducer).
  1. FAILURE (action types[2]): **on request failure** (**action.type** and server response as **action.error** are sent to reducer).

## Emit data example:
- action types file:
```
export const SEND_MESSAGE = '[Chat] SEND_MESSAGE';
export const SEND_MESSAGE_SUCCESS = '[Chat] SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAIL = '[Chat] SEND_MESSAGE_FAIL';
``` 
- actions file:
```
export const sendMessage = ({ message, username }) => ({
   type: 'socket',
   types: [SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL],       	
   promise: (socket) => socket.emit('chat', { message, handle: username }),
 });
```
- reducer file:
```
case SEND_MESSAGE: {
    return updateObject(state, { messageStatus: 'Sending' });
}
case SEND_MESSAGE_SUCCESS: {
    return updateObject(state, { messageStatus: 'Sent' });
}
case SEND_MESSAGE_FAILED: {
    return updateObject(state, { messageStatus: 'Send failed' });
}
```
- selectors file:
```
export const getChatMessageStatus = ({ state }) => state.chat.messageStatus;
```
- required component:
    - make the required imports
    - create a submit function:
    ```
      const submit = () => {
        dispatch(sendMessage({ message, username }));
        setMessage('');
      };
     ```
    - assign the created function to a button:
    ```
      <button onClick={submit} disabled={!username || !message}>
  	   Send
  	 </button>
    ```
    - display message status:
    ```
    <p>{messageStatus}</p>
    ```
## Required backend repository to run this app:
- Node-Js-Organization/chat-websocket
