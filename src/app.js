class IndecisionApp extends React.Component {
	
	render() {
		const title = 'Indecision';
		const subTitle = 'put youe life in the hands of a computer';
		const options = ['thing one' , 'thing two' , 'thing tree'];
		return (
			<div>
				<Header title={title} subTitle={subTitle} />
				<Action />
				<Options options={options}/>
				<AddOption />		
			</div>
		);
	}
}


class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subTitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		
		return (
			<div>
				<button>what should i do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				{this.props.options.map( (option) => <Option key={option} optionText={option} /> )}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optionText}
			</div>
		);
	}
}


class AddOption extends React.Component {
	render() {
		return (
			<form>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		);
	}
}


ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));