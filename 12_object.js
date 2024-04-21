//Object Literals

 const mysym = Symbol("key1")


const jsUser = {
    name:"Harish",
    "full name":"Harish Patel",
    [mysym]:"mykey1",
    age: 35,
    location:"Pardi",
    email:"harish@google.com",
    isloggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);


//Object.freeze(jsUser) //unable to edit properties with freeze() function

//jsUser.email = "harry@google.com"

jsUser.greeting = function(){

    console.log("Hello Good Morning!!!")
}

jsUser.greetingtwo = function(){

    console.log(`Hello Good morning!!! ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

