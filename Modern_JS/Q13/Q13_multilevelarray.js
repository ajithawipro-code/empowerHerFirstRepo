const people = [{
     personname: "Alice",
      address: { 
        city: "New York", street: { 
            streetname: "Broadway", number: 123
         } } }, { 
            personname: "Bob", address: { 
                city: "Los Angeles", street: {
                     streetname: "Sunset Boulevard", number: 456 } } }] ;

const{personname:firstname,address:{city:firstcity,street:{streetname:firststreetname,number:firstnumber}}}=people[0];
const{personname:secondname,address:{city:secondcity,street:{streetname:secondstreetname,number:secondnumber}}}=people[1];
console.log(`${firstname} lives in ${firstcity} on ${firststreetname}`);
console.log(`${secondname} lives in ${secondcity} on ${secondstreetname}`);


