import { createRoot } from 'react-dom/client';
//import meta image
import '@/public/assets/images/metaImage.jpg';
import { Provider } from 'react-redux';

import configureStore from './js/store/configureStore';
import App from './App';
import '@/scss/global.scss';

//socket client
import SocketClient from './js/services/SocketClient';

const socketClient = new SocketClient();
const store = configureStore(socketClient);

const container = document.getElementById('root'),
  root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
