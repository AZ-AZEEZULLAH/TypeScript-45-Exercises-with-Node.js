// Creating an Array
var userNames = ["Waheed", "Razaq", "Latif", "Sajid", "Shakoor"];
// Using forEach loop an Array.
userNames.forEach(function (oneUser) {
    if (oneUser === "Latif") {
        console.log("Hello   ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello   ".concat(oneUser, ", thank you for logging in again."));
    }
});
