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

function hello(name) {
    if (name == null || name == '') {
        console.log("You didn't give me your name");
    }
    else {
        console.log(`Hello, and Welcome ${name}!`);
    }
    return name;
}
function randomInt(min, max) {
    return (Math.floor((max - min + 1) * Math.random())) + min;
}

function hospitality(name, gifts) {
    if (name == null || name == '') {
        console.log('No gifts.');
    }
    else {
        console.log(`${name}, would you like some ${gifts[randomInt(0, gifts.length - 1)]}?`)
    }
}

hospitality(hello(prompt('What is your name?', '')), foods);