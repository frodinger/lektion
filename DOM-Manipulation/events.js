/*
const boxA = document.querySelector("#a");

boxA.addEventListener("click", (e) => {
    const element = e.target;

    if (element.className == "box blue") {
        element.className = "box red textWhite";
    } else {
        element.className = "box blue"
    }
});
*/

// Ändra flera med array och loop

const blueBoxes = document.querySelectorAll(".blue");

blueBoxes.forEach((blueBox) => {
    blueBox.addEventListener("click", (e) => {
        const element = e.target;
    
        if (element.className == "box blue") {
            element.className = "box red textWhite";
        } else {
            element.className = "box blue"
        }
    });
});

const greenBoxes = document.querySelectorAll(".green");

greenBoxes.forEach((greenBox) => {
    greenBox.addEventListener("mouseover", (e) => {
        e.target.className = "box blue textWhite";
    });

    greenBox.addEventListener("mouseout", (e) => {
        e.target.className = "box green";
    });
});

const red = document.querySelectorAll(".red");

red.forEach((r) => {

    r.addEventListener("mouseover", (e) => {
        e.target.className = "circle red";
    });

    r.addEventListener("mouseout", (e) => {
        e.target.className = "box red"; 
    });
});