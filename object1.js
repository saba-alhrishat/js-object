console.log ("*******1*******")

var user =  {
     name : "adam",
     age : 25,
      gender : "male",
}
console.log (`${user.name},${user.age},${user.gender}`)
console.log ("******2********")

var user =  {
    name : "adam",
    age : 25,
}
user.gender = "male"
console.log (`{name : ${user.name}, age: ${user.age},gender: ${user.gender}}`)

console.log ("******3********")
var user =  {
    name : "adam",
    age : 25,
}
user["gender"] = "male"
console.log (`{name : ${user.name}, age: ${user.age},gender: ${user.gender}}`)

console.log ("*******4*******")
var user =  {
    name : "adam",
    age : 25,
     gender : "male",
}
console.log (user.name)

console.log ("*******5*******")

var user =  {
    name : "adam",
    age : 25,
     gender : "male",
}
console.log (user["name"])

console.log ("*******6*******")

var user =  {
    name : "adam",
    age : 25,
     gender : "male",
}
for ( var key in user ) {
    console.log (`{name : ${user.name}, age: ${user.age},gender: ${user.gender}}`)

}

console.log ("*******7*******")

var user =  {
    name : "adam",
    age : 25,
     gender : "male",
}
var user2 = Object.keys(user) 
console.log(user2)

console.log ("*******8*******")

var user =  {
    name : "adam",
    age : 25,
     gender : "male",
}
var user2 = Object.values(user) 
console.log(user2)

console.log ("*******9*******")

var user =  {
    name : "adam",
    age : 25,
     gender : "male",
}
var user2 = Object.entries(user) 
console.log(user2)

console.log ("*******10*******")


var user1  =  {
    name : "adam",
    age : 25,
}

var user2  =  {
    gender : "male",
}

console.log (Object.assign(user1 ,user2) )


console.log ("*******11*******")


var user =  {
    name : "adam",
    age : 25,
     gender : "male",
}
var user2 = Object.freeze(user) 
console.log(user)


console.log ("*******12*******")


var user =  {
    name : "adam",
    age : 25,
     gender : "male",
};

 Object.seal(user);
 user.name = "saba";
 user.age = 22;
console.log(user)
