
function enterFruits() {
    let brojOmiljenihVockiText = prompt("Unesi broj omiljenih vocki");
    let brojOmiljenihVocki = parseInt(brojOmiljenihVockiText);

    const fruits = [];
    for (let i = 0; i < brojOmiljenihVocki; i++) {
        let vocka = prompt("Unesi omiljeno voće: ")
        fruits[i] = vocka;

    }
    console.log(fruits.length);
    let htmlSadrzaj = "<ul>";
    for (let j = 0; j < fruits.length; j++) {
        htmlSadrzaj = htmlSadrzaj + "<li>" + fruits[j] + "</li>";
    }
    htmlSadrzaj = htmlSadrzaj + "</ul>"
    let fruitPara = document.getElementById("fruitPara");
    fruitPara.innerHTML = htmlSadrzaj;
}

function pritisniPeticu() {
    for (; true;) {
        let unosKorisnika = prompt("Unesi peticu i pocni igricu");
        if (unosKorisnika == 5) {
            alert("Unio si peticu i poceo si igricu");
            break;
        } else {
            prompt("Unesite ponovo broj")
            break;
        }
    }
}
function igrica() {
    for (; true;) {
        const unos = prompt("Unesi peticu i zapocni igricu");
        const unosBroja = parseInt(unos);
        if (unosBroja === 5) {
            alert("Unio si peticu i poceo si igricu");
            break;
        } else {
            alert("Niste unijeli peticu");
        }
    }
}
//kreirati JS objekat person... name,surname,age
function test() {
    const person = {
        name: "Ibrahim",
        surname: "Memišagić",
        age: 19,
    };

    let textInfo = "";
    for (let polje in person) {
        console.log(polje)
        textInfo = textInfo + " - " + person[polje];
    }
    alert("Person Info: " + textInfo);
}

const vegetables = ["Kelj", "Spinat", "Krastavac", "Lubenica"];
for (let vegetable in vegetables) {
    console.log(vegetables[vegetable]);
}

const cars = ["Audi", "BMW", "Fiat", "VW", "Mercedes"];
cars.forEach(processCars);


function processCars(value) {
    console.log(value);
}

const months = ["Mart", "April", "August", "Jun", "Decembar"];
for (let month of months) {
    console.log(month);
}
const ime = "Samer";
for (let slovo of ime) {
    console.log(slovo);
}
//0-9
let number = 0;
while (number < 10) {
    if (number % 2 != 0) {
        console.log(number);
    }
    number++;
}

//Zadaca