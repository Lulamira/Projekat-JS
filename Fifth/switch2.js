function swichcase() {
    let month = prompt("Unesi redni broj mjeseca u godini");
    let monthNumber = parseInt(month);
    let year = prompt("Unesite godinu")
    let yearNumber = parseInt(year);
    let numberOfDays;
    switch (monthNumber) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numberOfDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numberOfDays = 30;
            break;
        case 2:
            if
                ((yearNumber % 4 == 0 && yearNumber % 100 != 0) || (yearNumber % 400 == 0)) {
                numberOfDays = 29;
            } else {
                numberOfDays = 28;
            }
            break;
        default:
            numberOfDays = 0;
            break;

    }
    alert("Broj dana u mjesecu je: " + numberOfDays);
}

