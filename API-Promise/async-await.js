
const todosElement = document.getElementById("todos");

async function getTodos() {
    // Måste ligga i en funktion som heter async för att funka
    // nyare än then och nu mer populärt
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    
    const filterData = data.filter((todo) => (todo.userId == 1));

    // printar ut det i index.html
    filterData.forEach((todo) => {
        const todoEl = document.createElement("div");
        todoEl.innerHTML = `<h3>${todo.title} ${todo.userId}</h3><p>completed: ${todo.completed}</p>`

        todosElement.appendChild(todoEl);
    })

    console.log(data);
}

getTodos();