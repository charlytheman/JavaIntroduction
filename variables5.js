var myNum = prompt("enter first number", "");
var operator = prompt("enter an operator(+,-,*,/)", "");
var myNum2 = prompt("enter second number", "");
var result = result(myNum, operator, myNum2);

if(result == 'wrong operator ' || result == 'wrong input'){
	console.log(result);

}else{
	var output = myNum + ' ' + operator + ' ' + myNum2 + ' = ' + result; 
	console.log(output);
}

function result(x, op, y) {
	if(op == '+') {
		return add(x, y);
	} else 	if(op == '-') {
		return subtract(x, y);
	} else 	if(op == '*') {
		return multiply(x, y);
	} else 	if(op == '/') {
		return divide(x, y);
	} else{
		return 'wrong operator';
		}		
}	

function add(x, y){
	// checks if the input is not a number
	if(isNaN(x) || isNaN(y)){
		return "wrong input";
}
	// used parseINT to prevent string concatenation	
	return parseInt(x) + parseInt(y);

}

function subtract(x, y){
	
    if(isNaN(x) || isNaN(y)){
		return "wrong input";
}

    return x - y;

}

function multiply(x, y){
	
    if(isNaN(x) || isNaN(y)){
		return "wrong input";
}

    return x * y;
}

function divide(x, y){
	
    if(isNaN(x) || isNaN(y)){
		return "wrong input";
}
    return x / y;
}
