let korisnickiUnos = prompt("Unesite vas broj godina");
let korisnickiUnos2 = prompt("Koliko si spreman da das za alkohol para");
let age = parseInt(korisnickiUnos);
let iznosNovca = parseFloat(korisnickiUnos2);

if(age >= 18 && iznosNovca>=10){
    
    alert("Piji stoko, piji dabogdom se napio..")
}
else{
    let message = "Premlad si da piješ alkoholnas pića ili nemas para :) " ;
    console.log(message)
    alert(message)
}