console.log("Admin js loaded");

let books=[];

// ADD BOOK
document.getElementById("addbook").addEventListener("click",(event)=>{
event.preventDefault();
let title=document.getElementById("title").value;
let author=document.getElementById("author").value;
let category=document.getElementById("category").value;
let book={title,author,category};
books.push(book);
displayBooks(); 

document.getElementById("title").value="";
document.getElementById("author").value="";
document.getElementById("category").value="Fiction";
});

// DISPLAY FUNCTION *** using default parameter ***
function displayBooks(list = books){
let container=document.getElementById("container");
container.innerHTML="";
for(let i=0;i<list.length;i++){
let card=document.createElement("div");
card.classList.add("card");
card.innerHTML=`
<p><b>Title:</b> ${list[i].title}</p>
<p><b>Author:</b> ${list[i].author}</p>
<p><b>Category:</b> ${list[i].category}</p>
`;

let deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";

deleteBtn.addEventListener("click",()=>{
books.splice(books.indexOf(list[i]),1);
displayBooks(); 
});

card.appendChild(deleteBtn);
container.appendChild(card);
}
}

// SORT A-Z
document.getElementById("sortAZ").addEventListener("click",()=>{
books.sort((a,b)=>a.title.localeCompare(b.title));
displayBooks(); 
});

// SORT Z-A
document.getElementById("sortZA").addEventListener("click",()=>{
books.sort((a,b)=>b.title.localeCompare(a.title));
displayBooks();
});

// FILTER
document.getElementById("filter").addEventListener("change",()=>{
let category=document.getElementById("filter").value;

if(category==="All"){
displayBooks(); 
}else{
let filtered=books.filter(a=>a.category===category);
displayBooks(filtered); 
}
});
