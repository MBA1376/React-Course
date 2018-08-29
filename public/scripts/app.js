'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
	visibility = !visibility;
	render();
};

var appRoot = document.getElementById('app');

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility toggle'
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			visibility ? 'hide details' : 'show details'
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'hey.these are some details.'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

render();
