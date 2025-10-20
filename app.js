var foods = [
    "Pizza",
    "Sushi",
    "Tacos",
    "Burgers",
    "Pasta",
    "Ramen",
    "Steak",
    "Curry",
    "Burrito",
    "Dumplings",
    "Lasagna",
    "Hot Dog",
    "Sandwich",
    "Fried Chicken",
    "Meatballs",
    "Paella",
    "Kebab",
    "Quesadilla",
    "Enchiladas",
    "Shawarma",
    "Gnocchi",
    "Pho",
    "Tamales",
    "Shepherd’s Pie",
    "Moussaka",
    "Apple",
    "Banana",
    "Strawberry",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Grapes",
    "Kiwi",
    "Blueberry",
    "Orange",
    "Peach",
    "Cherry",
    "Papaya",
    "Coconut",
    "Pomegranate",
    "Guava",
    "Carrot",
    "Broccoli",
    "Spinach",
    "Lettuce",
    "Tomato",
    "Cucumber",
    "Zucchini",
    "Eggplant",
    "Cauliflower",
    "Kale",
    "Bell Pepper",
    "Onion",
    "Garlic",
    "Corn",
    "Asparagus",
    "Beetroot",
    "Nachos",
    "French Fries",
    "Mozzarella Sticks",
    "Spring Rolls",
    "Onion Rings",
    "Pretzels",
    "Popcorn",
    "Chips",
    "Hummus",
    "Bruschetta",
    "Empanadas",
    "Samosa",
    "Ice Cream",
    "Cupcakes",
    "Brownies",
    "Cheesecake",
    "Cookies",
    "Pancakes",
    "Donuts",
    "Macarons",
    "Crepes",
    "Pudding",
    "Tiramisu",
    "Baklava",
    "Churros",
    "Pie",
    "Mochi",
    "Eclair",
    "Water",
    "Coffee",
    "Tea",
    "Lemonade",
    "Smoothie",
    "Milkshake",
    "Soda",
    "Hot Chocolate",
    "Iced Tea",
    "Orange Juice",
    "Matcha",
    "Coconut Water",
    "Latte",
    "Espresso",
    "Bubble Tea"
];

function greeting(name) {
    if (name == null || name == '') {
        console.log("You didn't give me your name");
    }
    else {
        console.log(`Hello, and Welcome ${toTitleCase(name)}!`);
    }
    return name;
}
function randomInt(min, max) {
    return (Math.floor((max - min + 1) * Math.random())) + min;
}
function toTitleCase(str) {
    if (!str) {
        return ""; // Handle empty or null strings
    }
    return str
        .toLowerCase() // Convert the entire string to lowercase first
        .split(" ") // Split the string into an array of words
        .map(function (word) {
            // For each word, capitalize the first letter and keep the rest lowercase
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" "); // Join the words back into a single string with spaces
}

function hospitality(name, gifts) {
    if (name == null || name == '') {
        console.log('No gifts.');
    }
    else {
        console.log(`${toTitleCase(name)}, would you like some ${gifts[randomInt(0, gifts.length - 1)].toLowerCase()}?`)
    }
}

hospitality(greeting(prompt('What is your name?', '')), foods);

function removeFood(item) {
    console.log('\n');
    if (item == null || item == '') {
        console.log("You didn't give me something to remove");
    }
    else {
        for (var i = 0; i < foods.length; i++) {
            if (foods[i] === toTitleCase(item)) {
                foods.splice(foods[i], 1);
                console.log(`<<Item remove here>>`);
            }
            console.log(foods[i]);
        }
    }
}

function addFood(item) {
    var myTag = document.createElement('p');
    var mySentence;
    if (item == null || item == '') {
        console.log("You didn't give me something to add");
    }
    else {
        foods.push(toTitleCase(item));
        for (var i = 0; i < foods.length; i++) {
            myTag = document.createElement('p');
            if (foods[i] == toTitleCase(item)) {
                //console.log(`<p>${foods[i]} <-- here is your item<p>`);
                mySentence = document.createTextNode(`${foods[i]} <-- here is your item`);
                myTag.appendChild(mySentence);
                document.querySelector('div').appendChild(myTag);
            }
            else {
                mySentence = document.createTextNode(`${foods[i]}`);
                myTag.appendChild(mySentence);
                document.querySelector('div').appendChild(myTag);
            }
        }
    }
}

addFood(prompt('would you like to add something?', ''));
removeFood(prompt('would you like to remove something?', ''));