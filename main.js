var stare_meniu = false;
var lista_pret_cos = [];
var lista_nume_cos = [];
var meniu = document.getElementById("logo");


meniu.onclick = function schimbare_stare(){

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
var t;

function conectare(){
    var text1 = document.getElementById("username").value;
    var text2 = document.getElementById("password").value;
    if( text1 != "" && text2 != "" ){
        if( conectat === false ){
            var variabila = document.getElementById("Password");
            variabila.style.visibility = "hidden";
            variabila = document.getElementById("username").value;
            var x = variabila;
            t = x;
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

var x = document.getElementById("lista");

for( i = 0; i < produse.length; i++ ){
    let caseta = document.createElement('div');
    let poza = document.createElement('img');
    poza.src = produse[i].src;
    poza.style.maxHeight = "100px";
    let text = document.createElement('div');
    text.innerHTML = produse[i].nume;
    caseta.append(poza);
    caseta.append(text);
    x.append(caseta);
}

function posteaza(){
    if(conectat === false){
        alert("Trebuie sa te conectezi pentru a posta o recenzie");
    }
    else{
        var x = document.getElementById("tabel_recenzii");
        var y = document.createElement('div');
        var text = document.getElementById("recenzie").value;
        var recenzie = document.createElement('div');
        var titlu = document.createElement('div');
        titlu.innerHTML = "Recenzie adaugata de " + t + ":";
        recenzie.innerHTML = text;
        recenzie.style.marginLeft = "40px";
        titlu.style.fontSize = "20px";
        y.append(titlu);
        y.append(recenzie);
        var spatiu = document.createElement('br');
        y.append(spatiu);
        y.style.fontSize = "15px";
        x.append(y);
    }
}
function schimba_poza(){
    const linkuri_poze = [
        {
            "link1" : "imagini/c7d8eb90cefa6b84db0842ba5d94b19a.webp",
            "link2" : "imagini/6b6606d0403d284b6c3c4ffe00970f02.webp"
        },
        {
            "link1" : "imagini/e4de23b2d509ead0fe0f80070b6890b6.jfif",
            "link2" : "imagini/55a9e68545dcb7cb4e254f5d3ff5db08.webp"
        },
        {
            "link1" : "imagini/34d6fc7f6a99595c3b7b3f9149227efb.jfif",
            "link2" : "imagini/d94fb2a0d98672bd7ae54be3ebbaae88.webp"
        },
        {
            "link1" : "imagini/cc0f13c1060b9454b9209ee19e3c8d5a.webp",
            "link2" : "imagini/fbdc825e831cafe673fa69558c357a49.webp"
        },
        {
            "link1" : "imagini/82549078adf230d628056dbcb282d0a1.webp",
            "link2" : "imagini/bea84155b6707ca40d2dc27ed3084a09.webp"
        },
        {
            "link1" : "imagini/7f6162b804704f25899c0da8f8f87fc5.webp",
            "link2" : "imagini/1837cb75509adf844f6963205f5b8ad6.webp"
        },
        {
            "link1" : "imagini/12708a3c091df4f8ecfd4d2adba4e4a8.webp",
            "link2" : "imagini/e1a2682cbab92e3c9ffd407981964e83.webp"
        },
        {
            "link1" : "imagini/43526f4c498297b283a0008031ed2bd8.webp",
            "link2" : "imagini/bb44b6e943c4729a13e5b2342b52e1a6.webp"
        },
        {
            "link1" : "imagini/076461e1178649f27c97a618a5a448e6.webp",
            "link2" : "imagini/cbe163a1b2c3b9205855bb5000f42d5f.webp"
        }
    ]
    var x = document.getElementById("poza_produs");
    for( i = 0; i < linkuri_poze.length; i++ ){
        var n = x.src.search(linkuri_poze[i].link1);
        if( n != -1 ){
            x.src = linkuri_poze[i].link2;
        }
        else{
            n = x.src.search(linkuri_poze[i].link2);
            if( n != -1 ){
                x.src = linkuri_poze[i].link1;
            }
        }
    }
}
