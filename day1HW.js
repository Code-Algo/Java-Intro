// Pre Work Q's

// Q1
function hello_name(user_name){
    return `Hello ${user_name}`;

}

console.log(hello_name('Alex'))

//Q2
function firstOdds(){
    for(let i = 0; i <= 100; i++){
        if (i % 2 != 0){
        console.log(i)
        }
    }
}
console.log(firstOdds())

//Q3

console.log(Math.max(1,2,3,4))

//Q4
function isLeapYear(ayear){
    if((0 == ayear % 4) && (0 != ayear % 100) || (0 == ayear % 400)){
        console.log(ayear + ' is a leap year');
    } else {
        console.log(ayear + ' isnt a leap year');
    }
}

isLeapYear(2004)

//Q5
function isConsecutive(alist, n){
    alist.sort();
    for (var i = 1; i < n; i++)
        if(alist[i]!=alist[i-1]+1)
            return false;
    return true;
}

var alist = [1,2,3,4,5,7]
var n = alist.length;
if(isConsecutive(alist, n) == true)
    console.log("consecutive");
else
    console.log("not consecutive");

// Homework Ex: 1


function findWords(dogString, dogName){
    for(let i = 0; i < dogName.length; i++){
        if(dogString.toLowerCase().includes(dogName[i].toLowerCase())){
            console.log(`Matched ${dogName[i]}`);
        }
    }
    console.log('no match');
}


findWords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"] )

// Homework Ex: 2
function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i %2 == 0){
            console.log(arr.splice('even index'));
        }
    }
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])

//Codewars 1

function evenOrOdd(number){
    if(number % 2 == 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}
evenOrOdd(7)

// Codewars 2

function multiply(a, b){
    let prod = a*b;
    console.log(prod);
}
multiply(1,2)

// let prod = 5*5
// console.log(prod)
// prod *=5
// console.log(prod)