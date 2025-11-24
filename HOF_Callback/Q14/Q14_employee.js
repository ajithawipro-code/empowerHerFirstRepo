let employee=[
            {name:"Alice",tasksCompleted:8,rating:4.7},
            { name:"Bob",tasksCompleted:4,rating:4.0},
            { name:"Charlie",tasksCompleted:6,rating:3.5},
            { name:"David",tasksCompleted:10,rating:4.9 },
            { name:"Eve",tasksCompleted:7,rating:2.8}
            ]

let filtered_array=employee.filter((el,i)=>{
    console.log("el is --->",el);
     console.log("i is --->",i);
    if(el.tasksCompleted>5)
    {
        return el;
    }
});
console.log("Filtered Array -->",filtered_array);

let mapped_Array=filtered_array.map((el)=>{

    if (el.rating>4.5){
        return{name:el.name,performance:"Excellent"};
    } 
    else if(el.rating >= 3 && el.rating <= 4.5){
        return{name: el.name,performance:"Good" };
    } 
    else {
        return null;   // so Needs Improvement doesn't appear
    }

});

mapped_Array = mapped_Array.filter(el => el !== null);

console.log("Mapped Array --->",mapped_Array);


let priority = {
  "Excellent": 2,
  "Good": 1
};

 let sorted_Array=mapped_Array.sort((a,b)=>{
        return priority[b.performance]-priority[a.performance];
 });
 console.log("Final Sorted Array-->",sorted_Array);

