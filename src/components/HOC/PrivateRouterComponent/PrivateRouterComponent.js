import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
// import setting for private component *
	import PrivateRoute from '../../hoc/PrivateRouteComponent';
// set up components
	<PrivateRoute exact path="/board" component={Board}
*/

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			/* check that user is registered */(true ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			))}
	/>
);

export default PrivateRoute;
