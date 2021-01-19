// Iteration 1: Names and Input
let hacker1 = "Rastko"
console.log("The drivers name is " + hacker1)

let hacker2 = "Kristina"
console.log("The navigators name is " + hacker2)

// Iteration 2: Conditionals



if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else
    console.log("Wow, you both have equally long names, " + hacker2.length + " characters!")



// Iteration 3: Loops

let separateName = '';
let upperName = hacker1.toUpperCase();
for (let i = 0; i < hacker1.length; i++) {
    separateName += upperName[i] + ' ';
}
console.log(separateName);










