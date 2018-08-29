let visibility = false;


const toggleVisibility = () => {
	visibility = !visibility;
	render();
}




const appRoot = document.getElementById('app');




const render = () => {
	const template = (
		<div>
			<h1>Visibility toggle</h1>
			<button onClick={toggleVisibility}>{visibility ? 'hide details' : 'show details'}</button>
			{visibility && (
				<div>
					<p>hey.these are some details.</p>
				</div>
			)} 
		</div>
	);
	
	ReactDOM.render(template , appRoot);
}

render();