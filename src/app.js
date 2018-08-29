console.log('app.js is running');

const app = {
	title : 'Indecision App' ,
	subTitle : 'this is some info' ,
	options : []
}

const onFormSubmit = (e) => {
	e.preventDefault();
	
	const option = e.target.elements.option.value;
	
	if(option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
}

const onRemoveAll = () => {
	app.options = [];
	render();
}

const onMakeDecision = () => {
	const randomNumber = Math.floor(Math.random()*app.options.length);
	alert(app.options[randomNumber]);
	
}



const appRoot = document.getElementById('app');



const render = () => {
	
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.title && <p>{app.subTitle}</p>}
			<p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
			<p>{app.options.length}</p>
			<button disabled={app.options.length === 0} onClick ={onMakeDecision}>what should i do?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map( (option) => <li key={option}>{option}</li>)
				}
			</ol>
			<form onSubmit = {onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	
	ReactDOM.render(template , appRoot);
}

render();