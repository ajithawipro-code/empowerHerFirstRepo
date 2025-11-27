let count_sec = prompt("Enter the number of seconds");
let count_ms=count_sec*1000;
let id=setInterval(()=>{      
    console.log("Remaining time...",count_sec);
    count_sec--;
},1000);

setTimeout(()=>{
    clearInterval(id);
    console.log("Countdown Complete!");    
},count_ms);
