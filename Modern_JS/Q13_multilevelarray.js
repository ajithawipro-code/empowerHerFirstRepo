const people = [{
     personname: "Alice",
      address: { 
        city: "New York", street: { 
            streetname: "Broadway", number: 123
         } } }, { 
            personname1: "Bob", address1: { 
                city1: "Los Angeles", street1: {
                     streetname1: "Sunset Boulevard", number1: 456 } } }] ;

const{personname,address:{city,street:{streetname,number}}}=people[0];
const{personname1,address1:{city1,street1:{streetname1,number1}}}=people[1];
console.log(`${personname} lives in ${city} on ${streetname}`);
console.log(`${personname1} lives in ${city1} on ${streetname1}`);


