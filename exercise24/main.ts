// Define variable.

let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let thirty = 30;
let fruits = ["Orange","Banana","Apple","Mango"];

// Test for equality and inequality with string .

console.log("Is apple is equal to apple");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");

//  Tests using the lower case function .
// Equal to.
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
// Not equal to
console.log("\nApple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical Testing.
// Equal to.
console.log("\n Is ten equal to thirty?");
console.log(ten == thirty);
// Not equal to.
console.log("\n Is ten is not equal to thirty ?");
console.log(ten!= thirty);

// Greater than
console.log("\n Is ten is greater than one?");
console.log(ten > 1);

// Smaller than.
console.log("\n Is thirty is small than ten?")
console.log(thirty< 10);

// Greater than or Equal to.
console.log("\n Is ten is greater than or equal to 7?");
console.log(ten>=7);

// Smaller than or Equal to .
console.log("\n is thirty is smaller than or equal to 10");
console.log(thirty <= 10);

// Tests using "and" & "or" operators.
console.log("\n thirty is not equal to 10 and thirty is Greater than 10");
console.log(thirty!=10 && thirty >10);

// Using (&&) "and".
console.log("\n thirty is not equal to 10 and thirty is Greater than 10");
console.log(thirty!=10 && thirty >40);

// Using (||) "or".
console.log("\n thirty is Greater than forty OR thirty is not equal to 30");
console.log(thirty >40 || 30 == 30);


console.log("\n thirty is Greater than forty OR thirty is equal to 30");
console.log(thirty >40 || 30 != 30);

// Test whether an item is include in a array.
console.log("\n Is Mango include in my Fruits Array");
console.log(fruits.includes("Mango"));

//  Test whether an item is not include in a array
console.log("\n Is Mango not include in my Fruits array");
console.log(!fruits.includes("Mango"));





