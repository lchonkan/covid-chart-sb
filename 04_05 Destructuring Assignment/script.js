console.info("The Script is loaded");


//The traditional way of gettign a value from an array is to use the 
// index of the value in [squarebrackets]
var cities = ["Nicoya", "Cartago", "Curridabat", "Santa Ana", "Heredia"];
console.info("The first option is to use the index of the array");
console.info(cities[0]);
console.info(cities[3]);


//Instead, we can use Deconstructing tools to achieve the same results
var [first, fourth] = ["Nicoya", "Cartago", "Curridabat", "Santa Ana", "Heredia"];
console.info("Using the first and fourth keywords does not work");
console.log(first);
console.warn(fourth);

var [first, , , fourth,] = ["Nicoya", "Cartago", "Curridabat", "Santa Ana", "Heredia"];
console.info("But we can use the comma separator in indicate skipping a palce in the array");
console.log(first);
console.log(fourth);

//We can use this with objects as well

console.info("Example using properties of objects");
var sandwich = {
    title: "Reuben",
    price: 7,
    description: "Clevelands favorite Sandwich",
    ingredients: ['Bread', 'Corned Beef', 'Dressing', 'sauerkraut', 'cheese', 'lettuce']
};
console.log(sandwich.title);
console.log(sandwich.price);


//We can use this with objects with DESTRUCTURING

console.info("Example using properties of objects");
var {title,price} = {
    title: "Reuben",
    price: 7,
    description: "Clevelands favorite Sandwich",
    ingredients: ['Bread', 'Corned Beef', 'Dressing', 'sauerkraut', 'cheese', 'lettuce']
};
console.log(title);
console.log(price);

//We can use this with objects with DESTRUCTURING COMPLEX EXAMPLE

console.info("Example using properties of VACATION object");
var vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    cost: 4000
};

//Now we are going 
//to use a function to access the properties of the vacation object
// We use the {curly braces} as the parameters of the function, deconstructing
// the object or variable that was used as an input and
// performing operations with those variables inside the function. 

//The function is said to be PARSING the object it receives. 
function vacationMarketing({destination,activity}) {
    return `Come to ${destination} and do some ${activity}`    
}

console.log(vacationMarketing(vacation));