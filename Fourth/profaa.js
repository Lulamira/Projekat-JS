function vrijemeSad() {
    let unos = prompt("Unesite naziv dana u sedmici na Engleskom jeziku");
    let odabir = unos;
    let poruka;
    if(odabir = Monday) {
        poruka ="Ispravno unesen Ponedeljak na Engleskom jeziku";
    }else if(odabir = Tuesday) {
        poruka = "Ispravno unesen Utorak na Engleskom jeziku";
    }else if(odabir = Saturday) {
        poruka = "Ispravno unesen Srijeda na Engleskom jeziku";
    }else if(odabir = Thurstday) {
        poruka = "Ispravno unesen Cetvrtak na Engleskom jeziku";
    }else if(odabir = Friday) {
        poruka = "Ispravno unesen Petak na Engleskom jeziku";
    }else if(odabir = Saturday) {
        poruka = "Ispravno unesen Subota na Engleskom jeziku";
    }else if(odabir = Sunday) {
        poruka = "Ispravno unesen Nedelja na Engleskom jeziku";
    }else{
        poruka = "Neispravan Unos";
    }alert(poruka);
}
    
     