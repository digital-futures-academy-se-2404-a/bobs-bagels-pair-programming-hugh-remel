import basket from '../src/basket.js'
import { assertEqual } from './testing-framework.js';


const cleanUp = () => {
    item = undefined;
    expected = undefined;
    actual = undefined;
    result = undefined;
    basket.items = [];
}


//User Story 1
console.log('Test 1');
console.log("==================");
console.log("Add item to basket using addItem increases length by 1.");
console.log("==================");

//Arrange
let item = {};
let expected = basket.items.length + 1;
let actual, result;

//Act
basket.addItem(item);
actual = basket.items.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? 'Pass' : 'Fail');
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp();

////////////////////////////////////////////////////////////////////////

console.log('Test 2');
console.log("==================");
console.log("Item passed to basket is actually added to basket");
console.log("==================");

// Arrange
expected = true;
item = {};

// Act
basket.addItem(item);
actual = basket.items.includes(item);

// Assert
result = assertEqual(actual, expected);

console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log('\n\n');
cleanUp()

////////////////////////////////////////////////////////////////////////


console.log('Test 3');
console.log("==================");
console.log("You are able to add items to a basket with existing items");
console.log("==================");

//Arrange
let item1 = {};
let item2 = {};
expected = basket.items.length + 2;
//Act
basket.addItem(item1);
basket.addItem(item2);
actual = basket.items.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();

////////////////////////////////////////////////////////////////////////


console.log('Test 4');
console.log("==================");
console.log("You cant add an item with 'Null' value to the basket");
console.log("==================");

//Arrange
item = null;
expected = basket.items.length;

//Act
basket.addItem(item);
actual = basket.items.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();

////////////////////////////////////////////////////////////////////////
// User Story 2

console.log('Test 5');
console.log("==================");
console.log("You can remove an item from the basket");
console.log("==================");

//Arrange
basket.items = ['Bagel'];
item = 'Bagel';
expected = basket.items.length - 1;

//Act
basket.removeItem(item);
actual = basket.items.length;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();



////////////////////////////////////////////////////////////////////////


console.log("Test 6");
console.log("==================");
console.log("The item that is removed form the basket is the item passed into removeItem");
console.log("==================");

//Arrange
basket.items = ["Bagel", "Chicken"];
item = "Bagel";
expected = false;

//Act
basket.removeItem(item);
actual = basket.items.includes(item);

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();

////////////////////////////////////////////////////////////////////////
// User story 3

console.log("Test 7");
console.log("==================");
console.log("You can check if the basket is full");
console.log("==================");

//Arrange
basket.items = [1, 2, 3, 4, 5];
expected = true;

//Act
actual = basket.isFull();

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();

////////////////////////////////////////////////////////////////////////

console.log("Test 8");
console.log("==================");
console.log("You cannot add another item if the basket is full");
console.log("==================");

//Arrange
basket.items = [1, 2, 3, 4, 5];
item = 'Bagel';
expected = false;

//Act
basket.addItem(item);
actual = basket.items.includes(item);

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();

////////////////////////////////////////////////////////////////////////


//User story 4

console.log("Test 9");
console.log("==================");
console.log("You can increase the capacity of the basket");
console.log("==================");

//Arrange
let capacityIncrease = 3
expected = basket.capacity + capacityIncrease;

//Act
basket.setCapacity(basket.capacity + capacityIncrease);
actual = basket.capacity;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();

////////////////////////////////////////////////////////////////////////

console.log("Test 10");
console.log("==================");
console.log("You can decrease the capacity of the basket");
console.log("==================");

//Arrange
let capacityDecrease = 3
expected = basket.capacity - capacityDecrease;

//Act
basket.setCapacity(basket.capacity - capacityDecrease);
actual = basket.capacity;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();

////////////////////////////////////////////////////////////////////////

console.log("Test 11");
console.log("==================");
console.log("You cannot decrease the capacity bellow 1");
console.log("==================");

//Arrange
basket.setCapacity(1);
capacityDecrease = 1;
expected = basket.capacity;

//Act
basket.setCapacity(basket.capacity - capacityDecrease);
actual = basket.capacity;

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();