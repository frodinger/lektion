// Epoch tid: ANtal millisekunder sen 1 januari 1970
// tidstämpel
const t = Date.now();
console.log("tid just nu: ", t);

/*
// Kolla hur lång tid det tog
setTimeout(() => {
    const t2 = Date.now();
    console.log("tid just nu2: ", t2);
    console.log("det har gått:", t2 - t, "millisekunder");
}, 1000);
*/

// Får ett promise av ett response-objekt
// Har inte fått hela svaret - går alltså inte att använda
const responsePromise = fetch("https://jsonplaceholder.typicode.com/todos/");
console.log("Raden efter fetch:", Date.now() - t);

// I then har du fått det riktiga response-objektet
// Sen väntar man på json-omvandlingen till javascript-objekt
const dataPromise = responsePromise.then( (response) => {

    console.log("Svar från internet:", Date.now() - t);

    return response.json();
});

// I then har du det riktiga javascript-datat
dataPromise.then((data) => {
    console.log(data);
});

// Med then chaining
/*
fetch("https://jsonplaceholder.typicode.com/todos/")
.then((response) => {
    response.json();
})
.then((data) => console.log(data));
*/