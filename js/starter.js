var firstName;
console.log(firstName);
firstName = 'John';
console.log(firstName);


var lastName="Bush";
console.log(lastName);
lastName="Clinton";
console.log(lastName);

//Numeric type / int
var someNumber = 41;
console.log(someNumber)
console.log(typeof someNumber)

// float
var someFloat = 3.14159;
console.log(someFloat)
console.log(typeof someFloat)

//boolean
var someBool = false;
console.log(someBool);
someBool = true;
console.log(someBool);
someBool = undefined;
console.log(someBool);

// Array (list)
var someArray = [1,2,3];
console.log(someArray);

// Object Variable
var someObject = {'test':'Please Test Me!'};
console.log(someObject)
var key="steve"
var testObj = {key:123}
console.log(testObj)


var someObject1 = {test:'Please Test Me!'};
console.log(someObject1)

var fname = "Steve"
var newObj=(fname)
console.log(newObj)

// weird in js
console.log(notHere)
var notHere="Steve"
console.log(notHere)

testHoist();
function testHoist(){
    let blah ='blah';
    console.log(blah)
}
testHoist();


let blah = 123
blah = 321

const blah1 = 123
//blah1 = 432 //Error

// MATH
// add
let sum = 5+5
console.log(sum) //10
sum += 5;
console.log(sum) //15
console.log(sum ++, 'rightside'); // sum = sum + 1
console.log(sum)//16
console.log(++sum, 'leftside');
console.log(sum)//17

// subtract
let diff = 5-5
console.log(diff) //0
diff -=5 // -5
console.log(diff)
diff--
console.log(diff)

//multiply
let prod = 5*5
console.log(prod)
prod *=5
console.log(prod)

//divide
let divide = 5/5
console.log(divide); // 1
console.log(typeof divide);
divide /= 5;
console.log(divide);
console.log(typeof divide);

console.log(parseInt(divide));
console.log(parseFloat('.625'));

// multiply exp
let square = 5**2;
console.log(square);
square **=2;
console.log(square);

// floor div in js is not built like in python

let floor = Math.floor(5/2);
console.log(floor);

// ceiling
let ceil = Math.ceil(5/2);
console.log(ceil);
console.log(ceil);

// check this out
let stuff = 3.14 + '4'
console.log(stuff);
console.log(typeof stuff) //string

let stuff1 = 3.14 + parseInt('4')
console.log(stuff1); //7.14

let stuff2 = 3.14.toString() + '4'
console.log(stuff2) //3.144





