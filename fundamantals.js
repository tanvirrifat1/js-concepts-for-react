// how to declare a variable using let and const
const myName = 'Rifat';
let season = 'rainy';
season = 'winter';


// 2. condition
// 6 basic conditions : >, <, ===, !==, <=, >=
// multiple condition: &&, ||

if (myName === 'rifat' || season === 'rainy') {
    console.log('jabe')
}
else if (myName === 'Rifat') {
    console.log('ki jni')
}
else {
    console.log('mne hoy')
}

// 3. array declare
// index
// length, push, pop
const numbers = [12, 23, 45, 66, 88];
numbers.push(99)
numbers.pop(99)
numbers[3] = 77;
console.log(numbers)

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    console.log(num)
}

// function

function multiply(a, b) {
    const result = a * b;
    return result
}
const amount = multiply(2, 2);
console.log(amount)

// 6. object
// 3 ways to access property by name
const person = {
    name: 'akbor khan',
    age: 32,
    movie: ['king khan', 'Dhakar mastan'],
    address: {
        road: 'jani na',
        city: 'dhaka'
    }
}

const myVariable = 'age';

console.log(person.address.city)// direct by property
console.log(person['age']) // access via property string
console.log(person[myVariable]) // access via property name is a variable


