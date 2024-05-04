let guest_List = ["Waheed", "Raza", "Faheem", "Naeem"];

let doneCome = guest_List [0];


console.log(doneCome,"can not come:");

guest_List.splice(0,1,"Jabbar");


guest_List.forEach(guest => console.log(`Assalam -u-Alaikum ${guest} would you like to dinner with me `));


