class IndecisionCounterApp extends React.Component {
	
	render() {
		return (
			<div className="indecision-counter-app  group">
				<IndecisionApp />
				<Counter />
			</div>
		);
	}
}

/* this part is for indecisionApp */
class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		
		this.state = {
			options : []
		}
	}
	
	handleRemoveAll() {
		
		this.setState( () => {
			return {
				options : []
			};
		});
	}
	
	handlePick() {
		
		let randomNumber = Math.floor( Math.random()* this.state.options.length );
		alert(this.state.options[randomNumber]);
		
	}
	
	handleAddOption(option) {
		
		if(!option) {
			return 'enter valid value to add item.'
		}
		else if(this.state.options.indexOf(option) > -1){
			return 'this option exist. lets enter another:)';
		}
		this.setState( (prevState) => {
			return {
				options : prevState.options.concat([option])
			};
		});
	}

	
	render() {
		
		const title = "Indecision App";
		const subTitle = "put your life in the hands of a computer";
	
		return(
			<div className="indecision-app">
				<Header title={title} subTitle={subTitle}/>
				<Action hasOption={this.state.options.length > 0} handlePick={this.handlePick} />
				<RemoveAll handleRemoveAll={this.handleRemoveAll}/>
				<Options options={this.state.options} />
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);	
	
	}
}

class Header extends React.Component {
	
	render() {
		
		return(
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
				<button disabled={ !this.props.hasOption} onClick={this.props.handlePick}>what should i do?</button>
			</div>
		);
	}
}

class RemoveAll extends React.Component {
	
	render() {
		return(
			<div>
				<button onClick={this.props.handleRemoveAll}>remove all</button>
			</div>
		);
	}
}


class Options extends React.Component {
	
	render() {
		return (
			<div>
				{
					this.props.options.map( (option) => <Option key={option} optionText={option} />)
				}
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
	constructor(props) {
		super(props);
		
		this.handleAddOption = this.handleAddOption.bind(this);
		
		this.state ={
			error : undefined
		}
	}
	
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		
		const error = this.props.handleAddOption(option);
		
		this.setState( () => {
			return {error}
		});
		
		e.target.elements.option.value='';
	}
	
	render() {
		
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>add option</button>
				</form>
			</div>
		);
	}
}


/* this part is for counter app */
class Counter extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		
		this.state = {
			count : 0
		}
	}

	handleAddOne() {
		this.setState( (prevState) => {
			return {
				count : prevState.count+1
			};
		});
	}
	
	handleMinusOne() {
		this.setState( (prevState)  => {
			return {
				count : prevState.count-1
			};
		});
	}
	
	handleReset() {
		this.setState( () => {
			return {
				count : 0
			};
		});
	}
	
	render() {
		
		return(
			<div className="counter">
				<h1>Count : {this.state.count} </h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionCounterApp /> , document.getElementById('app'));