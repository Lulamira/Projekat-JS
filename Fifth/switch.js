function check() {
    let dayInWeek = prompt("Unesi ime dana u sedmici na Engleskom jeziku");
    let convertedEntry = dayInWeek.toLowerCase();
    if (convertedEntry === "monday") {
        alert("Prevod : Ponedeljak");
    } else if (convertedEntry === "tuesday") {
        alert("Prevod : Utorak");
    } else if (convertedEntry === "wedensday") {
        alert("Prevod : Srijeda");
    } else if (convertedEntry === "thursday") {
        alert("Prevod : Četvrtak");
    } else if (convertedEntry === "friday") {
        alert("Prevod : Petak");
    } else if (convertedEntry === "saturday") {
        alert("Prevod : Subota");
    } else if (convertedEntry === "sunday") {
        alert("Prevod : Nedelja");
    } else {
        alert("Pogrešan unos");
    }
}
function switchFunction() {
    const currentDate = new Date();//trenutni datum
    const currentDay = currentDate.getDay();
    switch (currentDay) {
        case 0:
            alert("Sonntag");
            break;
        case 1:
            alert("Montag");
            break;
        case 2:
            alert("Dienstag");
            break;
        case 3:
            alert("Mittwoch");
            break;
        case 4:
            alert("Donnerstag");
            break;
        case 5:
            alert("Freitag");
            break;
        case 6:
            //alert("Samstag");
            //document.write("FREITAG")
            let h2objekat = document.getElementById("dayInWeek");
            h2objekat.innerHTML = "Samstag";
            h2objekat.style = "color:orange;font-style:italic"
            break;
        default:
            break;
    }
}
function swichcase(){
let month = prompt("Unesi redni broj mjeseca u godini");
let year = prompt("Unesite trenutnu godinu")
}
