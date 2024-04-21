//Dates

let myDate = new Date()

//console.log(myDate.toString());


//let myCreatedDate = new Date("01-14-2023")

//console.log(myCreatedDate.toLocaleDateString());

let newDate = new Date()

console.log(newDate.toLocaleString('default',{

    day:"numeric",
    weekday:"long",
    year:"numeric",
    hour:"numeric",
    minute:"numeric",
    second:"numeric"
}))


