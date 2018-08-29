const multiplier = {
	numbers : [2 , 3  , 1  , 5] ,
	multiplyBy : 2 ,
	multiply() {
		return this.numbers.map( (number) => number* this.multiplyBy);
	}
}

console.log(multiplier.multiply());