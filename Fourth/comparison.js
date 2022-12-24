function nasaFunkcija(){
    console.log("neko klikno na tee");
    //document.write("TOTALNO NOVI SADRUZAJ U DOKUMENT HTML");
    let input = document.getElementById("starost");
    let starost = input.value;
    console.log("Starost = " + starost);
    if(isNaN(starost)){
        alert("Hej unesi starost kao broj a ne kao text...")
    }else{
        let message = starost<18?"Premlad si da glasaš...":"Mozes glasati"
        alert(message);
    }

}

const club = {
    type : "Fudbalski",
    name:"Čelik"
}


function drugaFunkcija(){
    const club = {
        type:"Fudbalski"
        name:"Čelik"
    };
    let korisnickiOdabir = "type";
    let select = document.getElementById("odabir");
    
    console.log(select);

}