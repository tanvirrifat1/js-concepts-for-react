// 'name', 5, true, {}, []
// '', 0, false, null, undefind
// cheak truthy 
let myVar = 5;
// cheak any truthy
if (myVar) {
    myVar = myVar * 10;
    console.log('true', myVar)
}
else {
    myVar = 0;
    console.log('false', myVar)
}

let myMoney = 50;
// you cheak negative or falsy anything
if (!myMoney) {
    console.log('true')
}
else {
    console.log('falsy')
}

const money = 800;
let food;
if (money > 100) {
    food = 'biriyani'
    // console.log(food)
}
else {
    food = 'cha biskut'
    // console.log(food)
}

// ternary
let food1 = money > 100 ? 'biriyani' : 'cha biskut';
// console.log(food1)

let drinks = (money > 100) ? 'coke' : 'water';
// console.log(drinks)


// number to string conversion
const num1 = 54;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number
const input = '580';
// console.log(input)
const inputNum = +input;
// console.log(inputNum)


//
let isActive = true;
const showUser = () => console.log('display-user');
const hideuser = () => console.log('hide-user');
isActive ? showUser() : hideuser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be excuted
isActive || hideuser();

// toggle boolean
isActive = !isActive