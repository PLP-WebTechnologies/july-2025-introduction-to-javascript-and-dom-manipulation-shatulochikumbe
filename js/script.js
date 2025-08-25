// Part 1: Variables, Data Types, Operators, Conditionals
console.log("Part 1: Variables, Data Types, Operators, Conditionals");

// Get elements from the HTML
const nameInput = document.getElementById("nameInput");
const nameButton = document.getElementById("nameButton");
const greeting = document.getElementById("greeting");

nameButton.addEventListener("click", function() {
    const name = nameInput.value;

    if (name) {
        greeting.textContent = "Hello, " + name + "!";
    } else {
        greeting.textContent = "Please enter your name.";
    }
});


// Part 2: JavaScript Functions
console.log("Part 2: JavaScript Functions");

// Function to calculate the sum of two numbers
function calculateSum(num1, num2) {
    return num1 + num2;
}

// Function to toggle the visibility of an element
function toggleElementVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

const calculateButton = document.getElementById("calculateButton");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const sumResult = document.getElementById("sumResult");

calculateButton.addEventListener("click", function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const sum = calculateSum(num1, num2);
    sumResult.textContent = "The sum is: " + sum;
});

const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", function() {
    toggleElementVisibility("toggleText");
});

// Part 3: JavaScript Loops
console.log("Part 3: JavaScript Loops");

// Loop to iterate through an array and display list items
const loopList = document.getElementById("loopList");
const myArray = ["apple", "banana", "cherry"];

myArray.forEach(function(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    loopList.appendChild(listItem);
});


// Loop to simulate a countdown
const countdownElement = document.getElementById("countdown");
let count = 5;

function countdown() {
    countdownElement.textContent = "Countdown: " + count;
    count--;
    if (count < 0) {
        countdownElement.textContent = "Blastoff!";
    } else {
        setTimeout(countdown, 1000); // Call countdown again after 1 second
    }
}

countdown(); // Start the countdown

// Part 4: DOM Manipulation
console.log("Part 4: DOM Manipulation");

// Function to add a new item to a list
function addListItem(text) {
    const domList = document.getElementById("domList");
    const listItem = document.createElement("li");
    listItem.textContent = text;
    domList.appendChild(listItem);
}

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function() {
    addListItem("New Item");
});

// Change the heading text
document.querySelector("h1").textContent = "Updated JavaScript Fundamentals!";

// Add a class to the body
document.body.classList.add("loaded");
