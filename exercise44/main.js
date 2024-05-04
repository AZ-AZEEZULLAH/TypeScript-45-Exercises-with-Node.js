//  Define a function  with a rest parameter that accept items arugments representing our sandwiches.
function make_sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a Sandwiches with the following item ,\n");
    items.forEach(function (single_Item) { return console.log(single_Item); });
    console.log("\n Now Enjoy the Sandwich \n");
}
// Call the function three times with different number of arguments
make_sandwiches("Chicken", "Cheese", "Egg");
make_sandwiches("Bread", "Butter");
make_sandwiches("Tomatto", "Potatto", "Mayo", " Bread", "Egg");
