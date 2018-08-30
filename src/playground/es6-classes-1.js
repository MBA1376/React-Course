class Person {
	
	constructor (name = "test" , age = 0) {
		this.name = name;
		this.age = age ;
	}
	
	getGreeting () {
		return `Hi , i am ${this.name}.`
	}
	
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`
	}
	
}

class Student extends Person {
	
	constructor (name = 'test' , age = 0 , major) {
		super(name , age );
		this.major = major;
	}
	
	hasMajor() {
		return !!this.major ;
	}
}

class Traveller extends Person {
	
	constructor (name='test' , age=0 , homeLocation) {
		super(name , age);
		this.homeLocation = homeLocation ;
	}
	
	hasHomeLocation() {
		return !!this.homeLocation ;
	}
	
	getGreeting () {
		let greeting = super.getGreeting();
		
		if(this.hasHomeLocation()){
			greeting+=` i'm visiting from ${this.homeLocation}.`;
		}
		
		return greeting;
	}
}



const me = new Student('Mohammad' , 21  , 'computer science');
const other = new Student('Andrew' , 25);

const andrew = new Traveller('andrew' , 25 );

console.log(me.hasMajor());
console.log(other.hasMajor());
console.log(andrew.getGreeting());

