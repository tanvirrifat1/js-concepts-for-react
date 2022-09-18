// JSON=> stringify , parse
const person = {
    name: 'akbor khan',
    age: 32,
    movie: ['king khan', 'Dhakar mastan'],
}
const personJSON = JSON.stringify(person);
console.log(person)
console.log(personJSON)

const personObj = JSON.parse(personJSON);
console.log(personObj)

// 2. fetch

// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))


// keys, values
const keys = Object.keys(person);
console.log(keys)
const values = Object.values(person);
console.log(values)

// for 
const numbers = [12, 24, 56, 88, 46];
numbers.forEach(num => console.log(num))
numbers.map(num => num * 2)
const product = numbers.map(num => num * 2);
console.log(product)

// for of on array like object
// loop on an object using for in


// add or remove from an array
const products = [
    { name: 'laptop', price: 6000, brand: 'ASUS', color: 'silver' },
    { name: 'mobile', price: 3000, brand: 'samsung', color: 'black' },
    { name: 'watch', price: 2500, brand: 'apple', color: 'ass' },
    { name: 'camera', price: 8000, brand: 'canon', color: 'gray' },
    { name: 'sunglass', price: 2000, brand: 'rebon', color: 'white' }
];

// copy products array and then add newProduct
const element = { name: 'webcam', price: 5000, brand: 'habit', color: 'black' };

const newProducts = [...products, element];
console.log(newProducts)

// create a new array without one specific item
// remove phone means create a new array without the phone

const remining = products.filter(product => product.name !== 'mobile');
console.log(remining)