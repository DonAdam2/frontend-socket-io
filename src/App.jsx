import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { connectToSocket, disconnectFromSocket } from '@/js/store/app/reducers/AppReducer';
//selectors
import { getConnectionStatus } from './js/store/app/selectors/AppSelectors';
//components
import LoadingIndicator from './js/components/UI/LoadingIndicator';
const ChatBox = lazy(() => import('./js/containers/ChatBox'));

const App = () => {
  const dispatch = useDispatch(),
    connectionStatus = useSelector((state) => getConnectionStatus({ state }));

  useEffect(() => {
    dispatch(connectToSocket());

    return () => {
      if (connectionStatus === 'connected') {
        dispatch(disconnectFromSocket());
      }
    };
    //eslint-disable-next-line
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="loader-wrapper">
          <LoadingIndicator />
        </div>
      }
    >
      <ChatBox />
    </Suspense>
  );
};

export default App;
