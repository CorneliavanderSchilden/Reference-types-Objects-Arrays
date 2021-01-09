//opdracht 1

//Deel 1 objecten 1 t/m 3

let person = {
    name: 'Cornelia',
    age: 49
};
console.log(person);

//Deel 1 objecten 4

let person = {
    name: 'Cornelia',
    age: 49
};
console.log(person.name);

//Deel 1 objecten 5

let person = {
    name: 'Cornelia',
    age: 49
};
console.log(person.age);

//Deel 1 objecten 6

//dot.notation
let person = {
    name: 'Cornelia',
    age: 49
};

person.name = "Cornelia"

//bracket.notation
let person = {
    name: 'Cornelia',
    age: 49
};

person['name'] = "Saartje";

console.log(person.name);

//Deel 1 objecten 7 en 8

let evaluations = {
    value: [7, 10, 9]
};
console.log(evaluations);

//opdracht 2

//Arrays 1
let rainbowColors = [];
console.log(rainbowColors);

//Arrays 2-3
let rainbowColors = ['red', 'yellow', 'purple'];
console.log(rainbowColors);

//Arrays 4
let rainbowColors = ['red', 'yellow', 'purple'];
console.log(rainbowColors.length);

//Arrays 5
let rainbowColors = ['red', 'yellow', 'purple', 'green'];
console.log(rainbowColors[0]);

//Array 6

??

    //Arrays 7
    let rainbowColors = ['red', 'yellow', 'purple'];
const count = rainbowColors.push('green');
console.log(rainbowColors);

//Arrays 8
let rainbowColors = ['red', 'yellow', 'purple', 'green'];
const count = rainbowColors.push(5);
console.log(rainbowColors);

//Arrays 9
let rainbowColors = ['red', 'yellow', 'purple', 'green'];
const count = rainbowColors.push("greeting:Hi, ik ben een object");
console.log(rainbowColors);

//Arrays 10
let rainbowColors = ['red', 'yellow', 'purple', 'green', "greeting:Hi, ik ben een object"];
console.log(rainbowColors[4]);

//opdracht 3

// Deel 3 vraag 1

console.log("Naam kat 3:", catBreeds[2].name)

//Deel 3 vraag 2

console.log("Energie level kat 1:", catBreeds[0].energy_level)

//Deel 3 vraag 3

console.log("Eerste temperament kat 2:", catBreeds[1].temperament[0])

//Deel 3 vraag 4

console.log("Laatste temperament kat 3:", catBreeds[2].temperament[4])

//Deel 3 vraag 5

console.log("Favoriete voedsel kat 3:", catBreeds[2].favourite_food)