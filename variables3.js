// define the variable for message
var medium = prompt("Enter the message");

//if string equals the string in uppercase
if(medium == medium.toUpperCase()){
    //someone is shouting
    console.log("Someone is shouting");
}

//else if string equals the string in lowercase
else if(medium == medium.toLowerCase()){
    //someone is whispering
    console.log("Someone is whispering");
}

//else niether
else{
    console.log("Someone is neither whispering nor shouting");
}
    
    