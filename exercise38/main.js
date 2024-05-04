// Describe a function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling the function 1st tmee.
describe_city("Karachi");
// Calling the function 2nd time.
describe_city("Peshawar");
// Calling the function 3rd time .
describe_city("London", "Britich");
