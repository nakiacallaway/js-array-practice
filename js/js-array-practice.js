// ====== Coding Challenge: Javascript Arrays 3.24.21 ======
// 1. Create a function that creates a new array with a given value
//   a. The function should take two parameters: the size of the array and the item to pass in
//   b. const someArrayFunc = (arraySize, valueToPass) => {'Code for function'}
//   c. expected result someArrayFunction(3, 'apples') = ['apples', 'apples', 'apples']
const repeat = (item, times) => {
	let result = [];
	for(let i = 0; i < times; i++) {
  	result.push(item)
      console.log(result)
}};
repeat('badger', 5);


// 2. Reverse: Write a function that reverses the order of the items in the array
//   a. [1,2,3] = [3,2,1]

let reverseArray = [1, 2, 3, 4, 5]
reverseArray.reverse();
console.log(reverseArray);

// [1, 2, 3, 4, 5]


// 3. Create a function that removes all unnecessary elements from an array
//   a. use this array: let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];
//   b. remove the falsy values so that the function returns: [1, 'apple', 'bananas', 45, 'alkali'];

let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];
let cleanArray = dirtyArray.filter(Boolean);

console.log(cleanArray);

// 4. Create a function that returns a duplicate free array
//   a. let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1]
//   b. the function should return [1, 4, 9, 100, 30]

let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1]
let newArray = duplicateArray.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []); //this took a little tweaking but I honestly don't understand what it's doing.
console.log(newArray)
let shortSet = [...new Set(duplicateArray)]; //convert to set, which only allows unique items
console.log(shortSet);

// The simplest approach (in my opinion) is to use the Set object which lets you store unique values of any type. In other words, Set will automatically remove duplicates for us. 
//const names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];  
//let unique = [...new Set(names)]; 
//console.log(unique); 