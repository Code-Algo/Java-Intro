function determineAge(age){
    if ( age < 7 ){
        return 'Your name must be Gio'
    }else if (age>=7 && age <=65){
        return "You are middle aged"
    }else{
        return "You must hang out with Kevin and Jody"
    }
}

console.log(determineAge(66))

// inline if...Ternary Operator
// if true stuff is boolean else false stuff -- in python
// condition ? expr true : false

function determineAge2(age){
    return age < 18 ? 'Minor' : 'Adult';
}

console.log(determineAge2(18))

function determineAge3(age){
    return age < 18 ? 'Minor' : age >= 65 ? 'In the grave' : 'Adult';
}
console.log(determineAge3(16))

console.log('================================================================')
// in python the len of a list len(my_list)
console.log([1,2,3,4].length)

function listNums(){
    my_arr = [5,7,8,9,11,15,18,22,35,45,67]
    for(let i = 0; i<my_arr.length; i++){
        console.log(`i is: ${i}`)
        console.log(my_arr[i])
    }
}
listNums()

function myF(){x=1;};
console.log(myF()); //undefined

function decrease(){
    for(let i = 20; i >= 0; i--){
        console.log(i)
    }
}
decrease()

// for name in names: in python was super nice right?
/*JS we have for aof loop ...
not absolutely not the for in loop..
for in js is something different */

let myArr = ["a","b","c"]
for (const letter of myArr){
    console.log(letter);
}

/* while */

let whileArr=[5,6,7,08418,98788,73765,3272,4141]
let cnt=0

while(cnt<whileArr.length){
    console.log(whileArr[cnt]);
    cnt++;
}
console.log("==================================")

// Do while
let y=4;
let text=''

do{
    text += `I was here ${y} \n`
    y--
}while(y>0)

console.log(text)