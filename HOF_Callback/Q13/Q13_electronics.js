let items=["electronics","toys","clothing","toys","clothing","toys"];
let sum_items=items.reduce((acc,item)=>
    {
        if(acc[item])
        {
            acc[item]++;
        }
        else
        {
            acc[item]=1;
        }
        return acc;
    },{});

    console.log(sum_items);

let entry_result=Object.entries(sum_items).sort((a,b)=>b[1]-a[1]);
console.log(entry_result);
