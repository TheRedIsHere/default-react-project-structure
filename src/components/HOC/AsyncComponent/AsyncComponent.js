import React, { Component } from 'react';

/*
// import setting for lazy loading *
	import asyncComponent from '../../hoc/asyncComponent';
// set up components for lazy loading
	const AsyncNewPost = asyncComponent(() => {
		return import('./NewPost/NewPost');
	});
*/

const asyncComponent = (importComponent) => class extends Component {
	constructor() {
		super();
		this.state = {
			component: null,
		};
	}

	componentDidMount() {
		importComponent()
			.then((cmp) => {
				this.setState({ component: cmp.default });
			});
	}

	render() {
		const C = this.state.component;

		return C ? <C {...this.props} /> : null;
	}
};

export default asyncComponent;
