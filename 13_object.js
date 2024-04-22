//single ton objetc  "const tindeUser = new Object()""
//First declatation
//non single ton object
const tinderUser = {}

tinderUser.id = "200abc"
tinderUser.name = "Harry"
tinderUser.isLoggedIn = false

//console.log(tinderUser.id);

// Second Object declaration
const regulerUser = {
    emial : "harry@gmail.com",
    fullname: {
        userFullName:{
            firstname:"Harish",
            lastname:"Patel"
        }
    }

}

//console.log(regulerUser.fullname?.userFullName);

//mearge tow object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4= {5:"a",6:"b"}


//const obj3 = Object.assign({}, obj1 , obj2)
//const obj3 = {...obj1, ...obj2}
//console.log(obj3);

//arrays Object

const users = [
    {
    id: 1,
    email: "h@gmail.com"
    }
]


// users[1].email
//console.log(tinderUser);

console.log(Object.keys(tinderUser)); //conver object to array
console.log(Object.values(tinderUser)); //conver object to array
console.log(Object.entries(tinderUser)); //conver object to array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));