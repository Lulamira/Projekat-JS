function kontinenti() {
    let ime = prompt("Unesite ime Kontinenta: ");
    let convertIme = ime.toUpperCase();
    switch (convertIme){
        case "AFRIKA":
            alert("Afrique");
            break;
        case "EUROPA":
            alert("L'Europe");
            break;
        default:
            alert("Prvo nauci Bosanski")
            break;
    }

}