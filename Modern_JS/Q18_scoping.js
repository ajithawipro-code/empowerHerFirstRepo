if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
//console.log(x);

/* The output of y is given as 20 because it is declared using "var". 
"var" is function-scoped which means it can be accessed outside block also.
However, output of x throws "Referenceerror : x is not defined",
because x is declared using "let", "let" is block-scoped which means
let variables can be accessed only inside the block. */

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone); /* gives output as undefined*/

const student={
  name:"Alice",
  age:20,
  address:{city:"Chennai",
          State:"TamilNadu"}
};

console.log(student.name); /*prints Alice*/ 
//console.log(student.parents.name); /* throws runtime error */
console.log(student.parents?.name); /* gives undefined not runtime error */