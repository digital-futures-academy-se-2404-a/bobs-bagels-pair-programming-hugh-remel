import Basket from '../src/basket.js'
import { assertEqual } from './testing-framework.js';
import Item from '../src/item.js'

const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
}

//User Story 1
console.log('Test 1');
console.log("==================");
console.log("Add item to basket using addItem increases length by 1.");
console.log("==================");

//Arrange
const item1 = new Item;
const basket1 = new Basket;
let expected = basket1.getItems().length + 1;
let actual, result;

//Act
basket1.addItem(item1);
actual = basket1.getItems().length;

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
const item2 = new Item;
const basket2 = new Basket;

// Act
basket2.addItem(item2);
actual = basket2.getItems().includes(item2);

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
const item3a = new Item;
const item3b = new Item;

const basket3 = new Basket;
expected = basket3.getItems().length + 2;
//Act
basket3.addItem(item3a);
basket3.addItem(item3b);
actual = basket3.getItems().length;

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
const item4 = new Item(null)
const basket4 = new Basket;
expected = basket4.getItems().length;

//Act
basket4.addItem(item4);
actual = basket4.getItems().length;

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
const basket5 = new Basket;
const item5 = new Item;
basket5.addItem(item5);
expected = basket5.getItems().length - 1;

//Act
basket5.removeItem(item5);
actual = basket5.getItems().length;

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
const basket6 = new Basket;

const item6a = new Item('Chicken');
const item6b = new Item;
basket6.addItem(item6a);
basket6.addItem(item6b);

expected = false;

//Act
basket6.removeItem(item6b);
actual = basket6.getItems().includes(item6b);

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
const basket7 = new Basket(2);
const item7a = new Item("1");
const item7b = new Item('2');
basket7.addItem(item7a);
basket7.addItem(item7b);
expected = true;

//Act
actual = basket7.isFull();

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
const basket8 = new Basket(2);
const item8a = new Item("1");
const item8b = new Item("2");
const item8c = new Item('Nugget')

basket8.addItem(item8a);
basket8.addItem(item8b);
expected = false;

//Act
basket8.addItem(item8c);
actual = basket8.getItems().includes(item8c);

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
const basket9 = new Basket;
let capacityIncrease = 3
expected = basket9.getCapacity() + capacityIncrease;

//Act
basket9.setCapacity(basket9.getCapacity() + capacityIncrease);
actual = basket9.getCapacity();

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
const basket10 = new Basket;
expected = basket10.getCapacity() - capacityDecrease;

//Act
basket10.setCapacity(basket10.getCapacity() - capacityDecrease);
actual = basket10.getCapacity();

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
const basket11 = new Basket;
basket11.setCapacity(1);
capacityDecrease = 1;
expected = basket11.getCapacity();

//Act
basket11.setCapacity(basket11.getCapacity() - capacityDecrease);
actual = basket11.getCapacity();

//Assert
result = assertEqual(actual, expected);

//Result
console.log(result ? "Pass" : "Fail");
!result && console.log(`Actual: ${actual}, Expected: ${expected}`);
console.log("\n\n");
cleanUp();