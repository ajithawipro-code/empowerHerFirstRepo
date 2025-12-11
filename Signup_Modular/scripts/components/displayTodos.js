export function displayTodos(data) {
    const container=document.getElementById("todo-container");
    container.innerHTML = "";

    data.forEach(user => {
        const div = document.createElement("div");
        div.textContent = user.title;
        container.appendChild(div);
    });
}
