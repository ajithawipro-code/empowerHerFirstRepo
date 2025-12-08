function fetch_todos(){
   return  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
        .catch(error => console.log(error))
        }


function store_todos(data){
    const todo_data= data.slice(0,20);
    localStorage.setItem("todos",JSON.stringify(todo_data));
}


function get_stored_todos(){

    return JSON.parse(localStorage.getItem("todos")) || [];
}


const container=document.getElementById("container");

function render_todos(){
   
   
    const todos=get_stored_todos();
 
    container.innerHTML="";
    

    todos.forEach(todo=>{
        const item=document.createElement("div");
        item.classList.add("todo-item");

        const title=document.createElement("p");
        title.textContent=todo.title;

        const status = document.createElement("span");
        status.textContent = todo.completed ? "✔️ Done" : "❌ Not Done";
        status.style.marginLeft = "10px";

        const delbtn=document.createElement("button");
        delbtn.textContent="Delete";
        delbtn.addEventListener('click',()=>{
            delete_todos(todo.id);
        })


        item.appendChild(title);
        item.appendChild(status);
        item.appendChild(delbtn);
        container.appendChild(item);

    })
  
    
 
}

function delete_todos(id){

    let todos=get_stored_todos();
    todos=todos.filter(todo=>todo.id!==id);
    localStorage.setItem("todos",JSON.stringify(todos));
    render_todos();
}


fetch_todos()
.then(data=>{
    store_todos(data);
    render_todos();
})