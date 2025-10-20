var myTag;
var mySentence;
var added = false;

function createNewFoodElement(sentence) {
    myTag = document.createElement('p');
    mySentence = sentence;
    myTag.appendChild(mySentence);
    if (added === false) {
        document.querySelector('.add').appendChild(myTag);
    }
    else {
        document.querySelector('.remove').appendChild(myTag);
    }
}

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
    if (item == null || item == '') {
        console.log("You didn't give me something to remove");
    }
    else {
        for (var i = 0; i < foods.length; i++) {
            if (foods[i] === toTitleCase(item)) {
                foods.splice(foods[i], 1);
            }
            createNewFoodElement(document.createTextNode(`${foods[i]}`));
        }
    }
}

function addFood(item) {
    if (item == null || item == '') {
        console.log("You didn't give me something to add");
    }
    else {
        foods.push(toTitleCase(item));
        for (var i = 0; i < foods.length; i++) {
            createNewFoodElement(document.createTextNode(`${foods[i]}`));
        }
        added = true;
    }

}

addFood(prompt('would you like to add something?', ''));
removeFood(prompt('would you like to remove something?', ''));