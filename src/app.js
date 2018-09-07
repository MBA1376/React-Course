class IndecisionApp extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		
		this.state = {
			options : props.options
		}
	}
	
	handleDeleteOptions() {
		this.setState( () => {
			return{
				options : []
			}
		});
	}
	
	handlePick () {
		const randomNumber = Math.floor(Math.random()*this.state.options.length);
		alert(this.state.options[randomNumber]);
	}
	
	handleAddOption(option) {
		if(!option) {
			return 'enter valid value to add item.';
		}
		else if(this.state.options.indexOf(option) > -1 ) {
				error : 'this option exist. lets enter another ';
		}
		this.setState( (prevState) => {
			return {
				options : prevState.options.concat([option])
			};
		});
	}
	
	render() {
		const title = 'Indecision';
		const subTitle = 'put youe life in the hands of a computer';
		
		return (
			<div>
				<Header subTitle={subTitle} />
				<Action hasOptions={this.state.options.length > 0 }  handlePick={this.handlePick}/>
				<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
				<AddOption handleAddOption={this.handleAddOption} />		
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options : []
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subTitle}</h2>
		</div>
	);
}

Header.defaultProps = {
	title : 'Indecision'
};


const Action = (props) => {
	return (
		<div>
			<button 
				onClick={props.handlePick}
				disabled={ !props.hasOptions}
			>
				what should i do?
			</button>
		</div>
	);
}


const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.map( (option) => <Option key={option} optionText={option} /> )}
		</div>
	);
}


const Option = (props) => {
	return (
		<div>
			{props.optionText}
		</div>
	);
}


class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		
		this.state = {
			erroe : undefined
		}
	}
	
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		
		const error = this.props.handleAddOption(option);
		
		
		this.setState( () => {
			return { error }
		});
		
		e.target.elements.option.value = '';
	}
	
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}


ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));