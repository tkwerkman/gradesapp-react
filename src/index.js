import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ErrorPage from './routes/error';
import Root from './routes/root';
import Shots from './routes/shots';
import Slopes from './routes/slopes';
import Info, { loader as infoLoader } from './routes/info';
import Landing from './routes/landing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/shots',
				element: <Shots />,
			},
			{
				path: '/slopes',
				element: <Slopes />,
			},
			{
				path: '/info/:displayID',
				element: <Info />,
				loader: infoLoader,
			},
			{
				path: '/',
				element: <Landing />
			},
		]
	},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
