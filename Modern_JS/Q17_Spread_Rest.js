arr1 = [1, 2, 3];
arr2 = [4, 5];
spreadarr=[...arr1,...arr2];
console.log(spreadarr);

function sum(...nums)
{
    let total=0;
    for(let n of nums)
        total=total+n;
    console.log(total);
}
sum(12,23,34,45,56);

const user={name:"Alice",
            age:22,
            address:{city:"Bangalore",
                     pin:560001
            }
};

const{name:Name,age:Age,address:{city:City,pin:Pin}}=user;
console.log(`Name: ${Name}`);
console.log(`City: ${City}`);
console.log(`Pin: ${Pin}`);


