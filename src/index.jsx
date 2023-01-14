import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//import meta image
import '@/public/assets/images/metaImage.jpg';
//styles
import '@/scss/global.scss';
//store
import store from '@/js/store/store';
//app
import App from './App';
//socket client
import SocketClient from './js/services/SocketClient';

export const socketClient = new SocketClient();

const container = document.getElementById('root'),
  root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
