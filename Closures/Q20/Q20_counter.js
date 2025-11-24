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



function createBankAccount()
{
    let balance;
    let amount;
    function deposit(bal)
    {
        balance=bal;
        console.log("Deposited",balance);
    }
    function withdraw(amt)
    {
        if(balance>amt)
        {
            amount=amt;
            balance=balance-amount;
            console.log("Withdrawn",amount);
            console.log("Balance here is-->",balance);
        }
        else{
            console.log("Insufficient balance");
        }
    }
    function curr_bal()
    {
         console.log("Available balance",balance);
    }
    return {deposit,withdraw,curr_bal};

}

const account=createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(50);
account.curr_bal();
console.log(account.balance); //undefined

