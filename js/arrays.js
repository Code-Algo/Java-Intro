let grpONames = ['sarah', 'Shayne', 'francisco', 'andre', 'dmitry']

// francisco
console.log(grpONames[2])

// Does not work
console.log(grpONames[-1]) // does not work

//Array destructuring
let [sarah, shayne, fran, andre, dmitry] = grpONames
console.log(sarah)
console.log(dmitry)

// looping through an array inline
grpONames.forEach((name_)=>console.log(name_))

console.log(grpONames.toString())

//' ,'
console.log(grpONames.join(', '))

// .slice()
// my_list[2:4] in python
console.log(grpONames.slice(2,4))

// splice()
grpONames.splice(1,0,'Jody')
console.log(grpONames)

// my_list.append(element) in python

console.log(grpONames)
console.log(grpONames.push('dylan') > 8)
console.log(grpONames)

console.log(grpONames.pop())
console.log(grpONames)

console.log(grpONames.indexOf("Jody"))
console.log(grpONames.indexOf("Gio"))

const nums = [2,4,6,8,10]

//.shift
shiftedNum = nums.shift()
console.log(shiftedNum)
console.log(nums)
nums.unshift(123) // adds at index 0
console.log(nums)

// 2 kinds of equality in JS

console.log(1==1)
console.log(1=='1')// True.. double equals compares Values!!!!
console.log(1==='1') //False this will check the type and the value!
console.log(1===1)

//map reduce and filter
let bigNameList = ["Shayne", "Sarah", "Gio", "Francisco", "Andre", "dmitry", "Jody", "Sir StinksAlot", "AlphaIs"]

let aNames = bigNameList.map(
    (nam)=>{
        if (nam[0].toLowerCase()=='a'){
            return nam;
        }else{
            return false;
        };
    }
);

console.log(aNames)

const nums1 = [2,4,6,8,10]
let numsSum=nums1.reduce(
    (accumulator, currentNum)=>accumulator+currentNum
)
console.log(numsSum)


//filter
let aNames2=bigNameList.filter(
    nam=>nam[0].toLowerCase() == 'a'
)
console.log(aNames2)

