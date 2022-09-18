const numbers = [12, 23, 45, 66, 88];
const person = {
    name: 'akbor khan',
    age: 32,
    movie: ['king khan', 'Dhakar mastan']
}

// templete string
const about = `my name is ${person.name} and my age is ${person.age} has number ${numbers[2]} also movies ${person.movie[0]}`
console.log(about)


// 2. arrow function
const getfiftyfive = () => 55;
const addSistyfive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
    const sum = num1 + num2
    return sum;
}
const add = doMath(65, 89);
// console.log(add)

// spread operator
const newNumbers = [...numbers];
//creat a new array from an older array and add an element
const currentNumbers = [...numbers, 33]


numbers.push(99)
numbers.push(99)


console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)