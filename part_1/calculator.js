function add() {
	let sum = 0;
	for (j = 0; j < arguments.length; j++){
		sum += arguments[j];
	}
	return sum;
}

function multiply() {
	let product = 1;
	for (j = 0; j < arguments.length; j++) {
		product *= arguments[j];
	}
	return product;
}

module.exports = {
    add:add,
    multiply:multiply,
};