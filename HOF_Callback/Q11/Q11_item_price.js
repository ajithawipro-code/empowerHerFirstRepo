const arr1=[
    {name:"Laptop",price:1000},
    {name:"Mouse",price:20},
    {name:"Printer",price:100}];


function processProducts(arr){
let result=arr.map(n=>n.name);
console.log(result);
arr.forEach(n=>{
if(n.price>50){
console.log(`${n.name} is above $50`);
}else{
console.log(`${n.name} is below $50`);
}
});
}

processProducts(arr1);
