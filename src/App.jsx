import React, { lazy, Suspense, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch } from 'react-redux';
//actions
import { startSocketConnection } from './js/store/app/actions/AppActions';
//components
import LoadingIndicator from './js/components/UI/LoadingIndicator';
const TestComponent = lazy(() => import('./js/components/TestComponent'));

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startSocketConnection());
	}, []);

	return (
		<Suspense
			fallback={
				<div className="loader-wrapper">
					<LoadingIndicator />
				</div>
			}
		>
			<TestComponent />
		</Suspense>
	);
};

export default hot(App);
