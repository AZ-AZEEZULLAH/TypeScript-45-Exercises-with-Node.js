var guest_List = ["Waheed", "Raza", "Faheem", "Naeem"];
var doneCome = guest_List[0];
console.log(doneCome, "can not come:");
guest_List.splice(0, 1, "Jabbar");
guest_List.forEach(function (guest) { return console.log("Assalam -u-Alaikum ".concat(guest, " would you like to dinner with me ")); });
