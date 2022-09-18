const products = [
    { name: 'laptop', price: 6000, brand: 'ASUS', color: 'silver' },
    { name: 'mobile', price: 3000, brand: 'samsung', color: 'black' },
    { name: 'watch', price: 2500, brand: 'apple', color: 'ass' },
    { name: 'camera', price: 8000, brand: 'canon', color: 'gray' },
    { name: 'sunglass', price: 2000, brand: 'rebon', color: 'white' }
];

const brands = products.map(product => product.brand);
console.log(brands)

const prices = products.map(p => p.price);
console.log(prices)

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

products.forEach(product => {

})

// filter 
const cheap = products.filter(p => p.price <= 5000);
console.log(cheap)

const specificName = products.filter(product => product.name.includes('t'));
console.log(specificName)

// find
const special = products.find(product => product.name.includes('s'));
console.log(special)