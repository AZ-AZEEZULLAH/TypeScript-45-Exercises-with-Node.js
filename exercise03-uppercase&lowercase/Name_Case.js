var personalName = "azeezUllah";
// Lower Case.
console.log(personalName.toLowerCase());
// Upper Case .
console.log(personalName.toUpperCase());
// Title Case .
console.log(personalName.replace(/\b\w/g, function (wall) { return wall.toUpperCase(); }));
