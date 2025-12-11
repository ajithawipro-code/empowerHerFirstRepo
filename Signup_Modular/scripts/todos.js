import { displayTodos } from "./components/displayTodos.js";
import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
document.getElementById("footer").innerHTML = footer();

document.getElementById("navbar").innerHTML = navbar();

async function loadTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
     displayTodos(data);
}

loadTodos();
