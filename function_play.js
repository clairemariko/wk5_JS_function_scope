function hello(){
console.log( "hello everyone!" )

};

hello()

//you need to have RETURN or it will come back as undefined
function add(a,b){
return a + b;
}
console.log("the return value is " + add( 1, 2 ) );

function printName( name ){
  console.log( name );
}

printName( "simon" );

//now adding more than one arguments, these are local variables

function mood( name, mood ){
  console.log( name + " you are: " + mood );
}

mood("val", "stressed");

// //but what if you took away stressed it will come back with undefined for the 2nd arguement compare to the not the right amount of arguments you would get if this was ruby. if you pass in too many arguments it doesnt really care
function mood( name, mood ){
  console.log( name + " you are: " + mood );
}

mood("val", "stressed");

//we can pass as many or little argument we want without setting parameters. if you dont assign it then it just undefined. we have two variable one being undefined and the other equal to zero. make sure to put a RETURN. arguments is a key word for js

function sum(){
  var i, total = 0;
  for(i = 0; i < arguments.length; i+=1){
    total += arguments[i]
  }
  return total;
}

console.log( sum( 1,2,3,4 ) );

//functions are object in js, and so you can set it to a varaible. 

var hello = function(){
  return "hello world"
}
console.log(hello())

var add = function(a, b){

  return a + b;
  }
console.log( add( 1, 2 ))


var sum = function(){
  var i, total = 0;
    for(i = 0; i < arguments.length; i+=1){
      total += arguments[i]
    }
    return total;
  }

  console.log( sum( 1,2,3,4 ) );


var greater =  function (a,b){
  if (a > b){
    return a;
  }
  return b;
}

console.log("Return is: " + greater(1,2))

//so now you can pass an entire function to another function as an arguement.
// var add = function(a, b){
//   return a + b;
// }

var wow = function(functionToInvoke) {
  console.log(functionToInvoke(2,1))
}

// //we are invoking it inside wow and now this will return 3, get use to it , it happens a lot
// wow( add )

// Create a function that takes in the first name and surname, and speaks eg "Howdy, I am Rick Henry" Create a multiply function, returning the result. Create a function that takes in an array and returns the first element.



var name = function(a, b){
  return "howdy, I am " + a + b;
}

var fullname = function(functionToInvoke){
  console.log(functionToInvoke("Rick ", "Henry"))
}


fullname(name)


//SCOPE
//this should be undefined as talk only know about name and the console log doesnt have access to this
var talk = function(){
  var name = "Rick";
  console.log("my name is:" + name)
}

var walk = function (){
  console.log(name + "is walking");
}

walk();

console.log("trying to access result" + name)



// now we have made a name that is global so it can cover it all so this will will print my name is jay

var name = "Jay"

var talk = function(){
 
  console.log("my name is: " + name)
}

talk()

//but what if there is a local variable, this will take predance over the global so it will come back with val.
var name = "Jay"
var talk = function(){
  var name = "Val";
  console.log("my name is: " + name);
}

talk();
console.log("the global name is: ", name);


//what if you took out the var from var name = "rick" it will reassign the global variable to rick. 
var name = "Jay"
var talk = function(){
  name = "Rick";
  console.log("my name is: " + name);
}

talk();
console.log("the global name is: ", name);


// what if you put the talk at the bottom, then it becomes jay,jay,rick
var name = "Jay"
var talk = function(){
  name = "Rick";
  console.log("my name is: " + name);
}


console.log("the global name is: ", name);
talk();




//CLOSURES 
//you can right new functions within a function


var greet = function(isHappy){


  if (isHappy) {
    console.log("hello my friend");
  }else{
    console.log("mind your own business");
  }

}

greet(true)


//when you have a next variable and it looks locally and doesnt find text it goes up a level and then it finds text and then runs the if condition

var greet = function(isHappy){

  var text = "";

  if (isHappy) {
    text = "hello my friend";
  }else{
   text = "mind your own business";
  }

  var displayText = function(){
    console.log(text)
  }

  displayText()

}

greet(true)























