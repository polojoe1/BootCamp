/*var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);*/

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional",["mozzarella"],["pepperoni", "sausage"]);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

var p3 = pizzaOven("stuffed","BBQ",["none"],["none"]);

var p4 = pizzaOven("Pretzel", "light",["american","mozzarella"],['pepperoni',"sausage"]);



function fizzBuzz(num){
    for(var i =1;i<=num;i++){
        if(i%15===0){
            console.log('FizzBuzz');
        }
        else if(i%5===0) {
            console.log('Buzz');
        }
        else if(i%3===0){
            console.log('Fizz')
        }
        else if(i%3!==0&&i%5!==0){
            console.log(i);
        }
    }
}

var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];


// 1.console.log the pokémon objects whose id is evenly divisible by 3
// 2.console.log the pokémon objects that have more than one type
// 3.console.log the names of the pokémon whose only type is "poison"
// 4.console.log the first type of all the pokémon whose second type is "flying"
// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"


//first one
/*for(var i =0;i<pokemon.length;i++){
    if(pokemon[i].id%3===0){
        console.log(pokemon[i].name)
    }
}*/

//second one
/*for(var i =0;i<pokemon.length;i++){
    if(pokemon[i].types.length>1){
        console.log(pokemon[i].name)
    }
}*/

//third one
/*for(var i =0;i<pokemon.length;i++){
    if(pokemon[i].types=="poison"){
        console.log(pokemon[i].name)
    }
}*/

//fourth one
/*for(var i =0;i<pokemon.length;i++){
    if(pokemon[i].types[1]=="flying"){
        console.log(pokemon[i].name)
    }
}*/
//bonus
for(var i =0;i<pokemon.length;i++){
    if(pokemon[i].types=="poison"){
        console.log([...pokemon[i].name].reverse().join(""))
    }
}