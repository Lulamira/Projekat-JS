let korisnickiUnosGodina = prompt("Unesi broj svojih godina ");
let korisnickiUnosNovca = prompt("Unesi koliko imas love ");;

let age = parseInt(korisnickiUnosGodina); // parsInt --> od teksta u cijele brojeve
let novac = parseFloat(korisnickiUnosNovca); //parsFloat --> od teksta u 

console.log(age);
console.log(novac);


let message = age<18 || novac<10 ? "Nemaš love..." : "Imaš Love";
alert(message);
/* if(age < 18 || novac<10){
    alert("Nemaš love za narudzbu odrasle osobe...")
}
else{
    alert("Imas love i narucuj sve sto vole mladi i stari ali Punoljetni")
}
*/
