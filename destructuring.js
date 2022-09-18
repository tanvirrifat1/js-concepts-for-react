// 1. array destructuring
const numbers = [42, 56];
// const x = numbers[0]
// const y = numbers[1]

// const [x, y] = [44, 76]

const [x, y] = numbers;

function boxfiy(num1, num2) {
    const nums = [num1, num2];
    return nums
}
const [first, second] = boxfiy(55, 66)
// console.log(first, second)

// console.log(boxfiy(77, 66))

const person = {
    name: 'akbor khan',
    age: 32,
    movie: ['king khan', 'Dhakar mastan'],
}

const [fisrtMovie, secondMovie] = person.movie;
console.log(fisrtMovie, secondMovie)

// object destructuring
// const { name, age } = { name: 'alu', age: 18 };
const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 18 };
// console.log(name, age)

const employee = {
    id: 'VS code',
    designation: 'developer',
    machine: 'ASUS',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'dont know',
        drinks: 'water',
        watch: {
            color: 'Black',
            price: 5000,
            brand: 'apple'
        }
    }
}
const { id, machine } = employee;
// console.log(id, machine)
const { weight, address } = employee.specification;
// console.log(weight, address)
const { languages } = employee;
// console.log(languages)
const { brand } = employee?.specification?.watch;
console.log(brand)