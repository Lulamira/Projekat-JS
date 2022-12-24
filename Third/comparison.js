let firstName = "Adis ";
let lastName = "Gluhovic";
let fullName = firstName + lastName;
console.log(fullName);
let number = 10;
let text = fullName + number;
console.log(text);



let broj = 10;
let comparisonResult = broj == 10;
console.log(comparisonResult);
let tekst = "10"
comparisonResult = broj == tekst;
console.log(comparisonResult);
comparisonResult = broj === tekst;
console.log(comparisonResult);


let var1 = 10;
let var2 = '10';
comparisonResult = var1 !== var2;
console.log(comparisonResult);


comparisonResult = number >= var1;
console.log(comparisonResult);
if(number>var1){
    console.log("number ima vecu vrijednost od var1");
}
if(number>=var1){
    console.log("number ima vecu ili bar jednaku vrijednost kao i var1");
}