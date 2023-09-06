// Variables

const myName = "Oskar Kallas"; // String
let myAge = 16; // Number
const myChildren = ["Gen-junior", "Karl-junior"]
const canRideBycicle = false;
const person = {
    myName: "Oskar Kallas",
    myAge: 16,
};

console.log(myName, myAge);
console.log(myChildren);
console.log(canRideBycicle);
console.log(person)

//
const contacts = new Map();

contacts.set("Jessie", { phone: "55555555", aadress: "ametikool"});
contacts.has("Jessie");
contacts.get("Jessie");
contacts.set("Audi", { model: "S8"});
console.log(contacts.size)
contacts.delete("Audi");

const mySet = new Set();

mySet.add("1");
mySet.add({a: 1, b: 2});
mySet.add(true);

// JSON - JavaScript Object Notation

const thisIsJSON ={
    "name" : "Kallas Oskar",
    "age" : 16,
}

// if statements and shorthand expressions

let year = prompt("Kui vana sa oled?");

//Long version
if (year === "2006") {
    alert("õige vastus, vanamees. ")
} else if (year === "2005"){
    alert("Natuke rohkem.")
} else {
    alert("puhta mõõda.")
}

//shorthand version

year === "1756" 
? alert("Pihtas põhjas") 
: alert ("mõõda")


