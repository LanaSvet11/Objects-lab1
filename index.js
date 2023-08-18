/////Problem #1

const carThree = {
  wheels: 4,
  owner: "John",
  isBroken: false,
  color: "blue",
};

// add a new property called price
carThree.price = 15000;

// to add a new property called year
carThree["year"] = 2022;

// to change the value of the isBroken property
carThree.isBroken = true;

// to read the value of owner
const ownerValue = carThree.owner;

// Create a new variable called clientIsInterested
let clientIsInterested;

// Check if car color is blue. If true, set clientIsInterested to true, else false.
if (carThree.color === "blue") {
  clientIsInterested = true;
} else {
  clientIsInterested = false;
}

// Delete the owner property of carThree
delete carThree.owner;

console.log(carThree);
console.log(ownerValue);
console.log(clientIsInterested);

//////////Problem #2

// Declare the store object

const store = {
  profit: 10500,
  manager: "John",
  isOpenNow: true,
  isVeryExpensive: false,
};

// Use dot notation to add a new property called location
store.location = "City Center";

// Use bracket notation to add a new property called storeType
store["storeType"] = "Clothing";

// Use dot notation to change the value of the isOpenNow property
store.isOpenNow = false;

// Use dot notation to read the value of isVeryExpensive
const isVeryExpensiveValue = store.isVeryExpensive;

// Create a new variable called canShopHere
let canShopHere;

// Check if isOpenNow and NOT isVeryExpensive
if (store.isOpenNow && !store.isVeryExpensive) {
  canShopHere = true;
} else {
  canShopHere = false;
}

// Delete the profit property of store
delete store.profit;

console.log(store);
console.log(isVeryExpensiveValue);
console.log(canShopHere);

//////////Problem #3
let home = {
  rooms: 3,
  bathrooms: 2,
  isForSale: true,
  isInGoodLocation: true,
};

// Add properties using dot and bracket notation
home.price = 250000;
home["year"] = 2005;

// Change the value of isForSale property
home.isForSale = false;

// Read the value of bathrooms property
let bathroomsValue = home.bathrooms;

// Check if isForSale and isInGoodLocation
let buyHouse = home.isForSale && home.isInGoodLocation;

// Delete the isForSale property
delete home.isForSale;

console.log(home);
console.log(bathroomsValue);
console.log(buyHouse);

//////////Problem 4,5

// Declare a JS object with 4 properties
let myObject = {
  key1: "value1",
  key2: 42,
  key3: true,
  key4: ["apple", "banana", "cherry"],
};

// Add a new property using dot notation
myObject.newProperty = "Hello, world!";

// Add a new property using bracket notation
myObject["anotherProperty"] = 123;

// Change the value of one property using dot notation
myObject.key2 = 87;

// Read the value of one property using dot notation
let valueOfKey3 = myObject.key3;

// Create a new variable
let variableToSet;

// If/else statement to check information of the object
if (myObject.key1 === "value1" && myObject.key4.length > 2) {
  variableToSet = true;
} else {
  variableToSet = false;
}

// Delete one of the object properties
delete myObject.key4;

console.log(myObject);
console.log(valueOfKey3);
console.log(variableToSet);
