const a=5;
const b=7;
console.log(`${a} + ${b} = ${a+b}`);


/* Using template literals makes string concatenation easier and more readable. */

console.log(`JavaScript is one of the most popular programming languages used in web development today.
It allows developers to make websites interactive, dynamic, and user-friendly.
With JavaScript, we can create animations, handle form submissions, display alerts, and even connect to servers to fetch data.
Unlike older programming languages, JavaScript runs directly inside the browser, which makes the user experience faster and smoother.
Modern JavaScript also supports features like arrow functions, classes, promises, async-await, destructuring, and template literals, which make coding easier and more readable.
Because of its flexibility, JavaScript is now used not just on the front end, but also on the back end using environments like Node.js.
Overall, JavaScript continues to grow and remains an essential skill for anyone entering the world of web development.`);

const square=(n)=>{ return n*n}; /* converted normal function into arrow function using ()=>{} */
console.log(square(5));

const obj = {
  value: 50,
  test: () => console.log(this.value) /* Arrow functions dont bind their own "this", so "this.value" becomes undefined */
};
obj.test();

const product={name:"Pen", price:10};
const prod={...product};
console.log(prod);

const A={x:1};
const B={y:2};
console.log({...A,...B});

function maxValue(...nums){
    let max=1;
    for(let n of nums)
    {
        while(n>max)
        {
            max=n;
        }      

    }
    return max;
}
let result=maxValue(45,6,567,63,45,423);
console.log(result);


