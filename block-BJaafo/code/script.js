function getFullName(firstName = "" , lastName = ""){
    return firstName + lastName;
}
//console.log(getfullname);
console.log(getFullName);
//no.

function totalAmount(taxRate , amount){
    return `${amount} + ${(amount * taxRate)} ` ;   
}
console.log(totalAmount(0) //no output
console.log(totalAmount(3.12 , 300));

