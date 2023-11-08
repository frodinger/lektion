// CRUD

// CREATE

const element = document.createElement("div");
element.setAttribute("class", "box blue");
element.textContent = "D";
console.log("element", element);

// Läs in parent för att lägga till det nya elementet
const col1 = document.getElementById("col1");
col1.appendChild(element);

// CREATE MED ARRAY

const moreBlue = ["E", "F", "G"];

moreBlue.forEach((boxLetter) => {
    const element = document.createElement("div");
    element.setAttribute("class", "box blue textWhite");
    element.textContent = boxLetter;
    
    col1.appendChild(element);
})

// READ
// getElementById, getElementByClassName, querySelector

const boxA = document.getElementById("a");
console.log("a", boxA);

const boxes = document.getElementsByClassName("box");
console.log(boxes);
//skapar en array med objekten med den klassen, boxes är alltså en array

const boxE = document.querySelector("#e");
console.log("boxE", boxE);

const redBoxes = document.querySelectorAll(".box.red");
console.log("redBoxes", redBoxes);
//följer css namngivning, # för id och . för class

// UPDATE

const heading = document.getElementsByClassName("heading");
console.log(heading);
// heading är en array
heading[0].textContent = "Hej";

const blueBoxes = document.querySelectorAll(".box.blue");

blueBoxes.forEach((blueBox) => {
    blueBox.innerHTML = `<h2>${blueBox.innerHTML}</h2>`;
});

const greenBox = document.createElement("div");
greenBox.setAttribute("class", "box green textWhite");
greenBox.textContent = "I";

// hämta parent
const col3 = document.querySelector("#col3");
// måste hämta elementet man ska sätta elementet bredvid/efter
const boxJ = document.querySelector("#j");

col3.insertBefore(greenBox, boxJ);

// DELETE
// beöver parent och element som ska tas bort
col3.removeChild(boxJ);


// Uppdatera style med javascript
const boxC = document.querySelector("#c");
boxC.style.backgroundColor = "purple";