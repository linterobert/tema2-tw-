var stare_meniu = false;
var lista_pret_cos = [];
var lista_nume_cos = [];
function schimbare_stare(){
    let meniu_lateral = document.querySelector(".meniu_lateral");
    let meniu_lateral_ul = document.querySelector(".meniu_lateral ul");
    let meniu_lateral_buton = document.querySelector(".meniu_lateral ul button");
    if( stare_meniu === false ){
        meniu_lateral.style.color = "white";
        meniu_lateral.style.width = "310px";
        meniu_lateral.style.opacity = "1";
        meniu_lateral.style.background = "grey";
        stare_meniu = true;
        meniu_lateral_buton.style.visibility = "visible";
    }
    else{
        meniu_lateral_buton.style.visibility = "hidden";
        meniu_lateral.style.color = "black";
        meniu_lateral.style.width = "50px";
        meniu_lateral.style.opacity = "0.7";
        meniu_lateral.style.background = "black";
        stare_meniu = false;
    }
}
function adauga_in_cos(){
    var marime = document.querySelector(".marime").value;
    var pret = document.getElementById("1").textContent;
    var nume_produs = document.getElementById("nume").textContent;
    lista_pret_cos.push(pret);
    lista_nume_cos.push(nume_produs);
    if( marime == "..." ){
        alert("Nu ai selectat marimea");
    }
    else{
        alert("Produs adaugat in cos");
    }
}
var conectat = false;
function conectare(){
    var text1 = document.getElementById("username").value;
    var text2 = document.getElementById("password").value;
    if( text1 != "" && text2 != "" ){
        if( conectat === false ){
            var variabila = document.getElementById("Password");
            variabila.style.visibility = "hidden";
            variabila = document.getElementById("username").value;
            var x = variabila;
            variabila = document.getElementById("Username");
            variabila.style.visibility = "hidden";
            variabila = document.querySelector("#Conecteaza-te");
            variabila.textContent = "Bine ati venit, " + x +"!";
            variabila.style.marginLeft = "55px";
            variabila.style.marginTop = "20px";
            variabila.style.fontSize = "20px";
            variabila = document.getElementById("buton_conectare");
            variabila.textContent = "Deconecteaza-te";
            conectat = true;
            variabila = document.getElementById("Autentifica-te");
            variabila.style.visibility = "hidden";
        }
        else{
            var variabila = document.getElementById("Password");
            variabila.style.visibility = "visible";
            variabila = document.getElementById("username").value;
            var x = variabila;
            variabila = document.getElementById("Username");
            variabila.style.visibility = "visible";
            variabila = document.querySelector("#Conecteaza-te");
            variabila.textContent = "Conecteaza-te";
            variabila.style.fontSize = "20px";
            variabila.style.marginLeft = "55px";
            variabila.style.marginTop = "20px";
            variabila = document.getElementById("buton_conectare");
            variabila.textContent = "Conecteaza-te";
            conectat = false;
            variabila = document.getElementById("Autentifica-te");
            variabila.style.visibility = "visible";
        }
    }
    else{
        alert("Username sau parola neintroduse");
    }
}
function autentificare(){
    var Nume = document.getElementById("Nume").value;
    var Prenume = document.getElementById("Prenume").value;
    var Adresa = document.getElementById("Adresa").value;
    var Parola = document.getElementById("Parola").value;
    var Rescrie = document.getElementById("Rescrie").value;
    if( Nume != "" && Prenume != "" && Adresa != "" && Parola != "" && Rescrie != "" && Parola == Rescrie){
        var variabila = document.getElementById("999");
        variabila.style.visibility = "hidden"; 
        variabila = document.getElementById("998");
        variabila.style.visibility = "hidden";
        variabila = document.querySelector("#titlu_autentificare");
        variabila.textContent = "Cont generat cu succes!";

    }
    else{
        if(Nume != "" && Prenume != "" && Adresa != "" && Parola != "" && Rescrie != ""){
            alert( "Parola reintrodusa nu coincide cu cea initiala" );
        }
        else{
            alert("Toate campurile sunt obligatorii!");
        }
    }
}