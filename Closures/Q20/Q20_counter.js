function createCounter()
{
let count=0;
function increment()
{
    count++;
    console.log(`Current count: ${count}`);
}
function decrement()
{
    count--;
    console.log(`Current count:${count}`);
}
return {increment,decrement};
}

const createcounter=createCounter();
createcounter.increment();
createcounter.increment();
createcounter.decrement();
createcounter.increment();
createcounter.decrement();
createcounter.decrement();
createcounter.increment();
createcounter.increment();
createcounter.increment();
createcounter.increment();

