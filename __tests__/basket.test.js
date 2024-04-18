import basket from '../src/basket'
import { assertEqual } from './testing-framework';


console.log('Test 1');
console.log("==================");
console.log("Add item to basket using addItem increases length by 1.");
console.log("==================");


//Arrange
const item = {}
let expected = basket.items.length + 1
let actual, result;

//Act
basket.addItem(item);
actual = basket.items.length

//Assert
result = assertEqual(actual, expected);

//Result
console.log(`Test results: ${result}`);
console.log(basket.items);



console.log('Test 2');
console.log("==================");
console.log("Item passed to basket is actually added to basket");


console.log('Test 3');
console.log("==================");
console.log("Add item to basket using addItem increases length by 1.");


console.log('Test 4');
console.log("==================");
console.log("Add item to basket using addItem increases length by 1.");
