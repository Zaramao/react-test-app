// const person = {
// 	name: 'Ivan',
// 	age: 26,
// 	location: {
// 		city: 'BG',
// 		temp: 20
// 	}
// };

// const { name: firstName = 'Unknown', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Publish' } = book.publisher;
// console.log(publisherName);

const address = [ '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147' ];

const [ , , state ] = address;

console.log(`You are in ${state}`);

const item = [ 'coffee (hot)', '2', '2.50', '3' ];

const [ coffee, , priceMd ] = item;
console.log(`A medium ${coffee} costs ${priceMd}`);
