import { assertEqual } from "./testing-framework.js";
import { basket } from "./basket.js";

//Arrange
const item = 'onion bagel';
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