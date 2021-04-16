import React, { lazy, Suspense, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { startSocketConnection, stopSocketConnection } from './js/store/app/actions/AppActions';
//selectors
import { getConnectionStatus } from './js/store/app/selectors/AppSelectors';
//components
import LoadingIndicator from './js/components/UI/LoadingIndicator';
const ChatBox = lazy(() => import('./js/containers/ChatBox'));

const App = () => {
	const dispatch = useDispatch(),
		connectionStatus = useSelector((state) => getConnectionStatus({ state }));

	useEffect(() => {
		dispatch(startSocketConnection());

		return () => {
			if (connectionStatus === 'connected') {
				dispatch(stopSocketConnection());
			}
		};
	}, []);

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

export default hot(App);
