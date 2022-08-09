// function addNums(){
    
// }

// console.log('hello'); console.log('hello2')

function addNums(){
    let num = 4;
    let num2 = 5;
    return num + num2;
};

console.log(typeof addNums());
console.log(typeof addNums);
console.log(addNums());


function addNums2(num, num2){
    return num+num2
}
console.log(addNums2(4, 5));

// ES 6+ Arrow Functions
// In a one line arrow function the one line is automatically returned
const cubed = () => 3**3;
console.log(cubed())

// same as above but dumb
const cubeda = () => {return 3**3;}
console.log(cubeda())

const cubedb = () => {
    let x = 3
    return x**3;
}
console.log(cubedb())

const cubed2=num=>num**3;
console.log(cubed2(3))

// with one param the parens are optional
const cubed2a=(num)=>num**3;
console.log(cubed2a(3))

const xpower=(x,p)=> x**p;
console.log(xpower(3,3))

// Closure
function my_closure(){
    let counter = 0; // creating a private variable
    function add_to_count(){
        counter++;
        return counter
    }
    return add_to_count
}

let add = my_closure()
console.log(typeof add)

console.log(add())

console.log(
    ( function(nam){
        let hello = 'Hello World ' + nam;
        return hello
    })('Gio')
)


// python f-strings

let number = 666
let my_string = `your number is ${number}`
console.log(my_string)

/* write me a function use the keyword function and again as an arrow function
that takes in 3 parameters one of a name, of age, and of a multiplier
and return a string that says if i multiply [persons name] by [multiplier] I get [aget time multiplier]

my_func("steve", 55, 2)
"If I multiply Steve's age by 2 I get 110"
*/

const funk = (name_, age, mult) => `If i multiply ${name_}'s age by ${mult} I get ${age * mult}.`;
console.log(funk('steve', 55, 2))
console.log(typeof 'funk')




