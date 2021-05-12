const lista_produse = [
    {
        "denumire" : "Bluză 'Befelize'",
        "poza" : "imagini/c7d8eb90cefa6b84db0842ba5d94b19a.webp",
        "pret" : 105,
        "referinta" : "Bluză 'Befelize'.html"
    },
    {
        "denumire" : "Bluză cu fermoar sport PUMA pe gri / alb",
        "poza" : "imagini/e4de23b2d509ead0fe0f80070b6890b6.jfif",
        "pret" : 354,
        "referinta" : "Bluză cu fermoar puma.html"
    },
    {
        "denumire" : "Bluză de molton 'Club'",
        "poza" : "imagini/34d6fc7f6a99595c3b7b3f9149227efb.jfif",
        "pret" : 227,
        "referinta" : "Bluză de molton 'Club'.html"
    },
    {
        "denumire" : "Cămașă 'SUNSET'",
        "poza" : "imagini/cc0f13c1060b9454b9209ee19e3c8d5a.webp",
        "pret" : 55,
        "referinta" : "Cămașă 'SUNSET'.html"
    },
    {
        "denumire" : "Jeans 'Royal'",
        "poza" : "imagini/82549078adf230d628056dbcb282d0a1.webp",
        "pret" : 87,
        "referinta" : "Jeans 'Royal'.html"
    },
    {
        "denumire" : "Palton de primăvară-toamnă",
        "poza" : "imagini/7f6162b804704f25899c0da8f8f87fc5.webp",
        "pret" : 159,
        "referinta" : "Palton de primăvară-toamnă.html"
    },
    {
        "denumire" : "Pantaloni eleganți",
        "poza" : "imagini/12708a3c091df4f8ecfd4d2adba4e4a8.webp",
        "pret" : 155,
        "referinta" : "Pantaloni eleganți.html"
    },
    {
        "denumire" : "Sneaker de alergat 'Ultraboost 20'",
        "poza" : "imagini/43526f4c498297b283a0008031ed2bd8.webp",
        "pret" : 105,
        "referinta" : "Sneaker de alergat 'Ultraboost 20'.html"
    },
    {
        "denumire" : "Tricou ADIDAS ORIGINALS",
        "poza" : "imagini/076461e1178649f27c97a618a5a448e6.webp",
        "pret" : 139,
        "referinta" : "Tricou ADIDAS ORIGINALS.html"
    }
]
window.onload = function(){
    var x = document.getElementById("lista_produse");
    x.style.display = "flex";
    x.style.flexDirection = "row";
    x.style.flexWrap = "wrap";
    x.style.justifyContent = "space-around";
    x.style.marginTop = "90px";
    x.style.marginLeft = "60px";
    x.style.justifyContent = "center";
    x.style.marginBottom = "50px";

    for( i = 0; i < lista_produse.length; i++ ){
        let produs = document.createElement('div');
        let denumire = document.createElement('p');
        let pret = document.createElement('p');
        let poza = document.createElement('img');
        let a = document.createElement('a');
        a.href = lista_produse[i].referinta;
        poza.src = lista_produse[i].poza;
        poza.style.maxWidth = "220px";
        poza.style.marginLeft = "5px";
        poza.style.marginRight = "5px";
        poza.style.maxHeight = "350px";
        poza.style.marginTop = "2%";
        poza.style.justifyContent = "center";
        denumire.innerHTML = lista_produse[i].denumire;
        denumire.style.textAlign = "center";
        pret.innerHTML = "Pret " + lista_produse[i].pret + "  lei";
        pret.style.textAlign = "center";
        produs.style.backgroundColor = "rgb(148, 148, 148)";
        produs.style.marginLeft = "20px";
        produs.style.marginBottom = "20px";
        produs.style.width = "230px";
        produs.className = "produse";
        produs.append(denumire);
        a.append(poza);
        produs.append(a);
        produs.append(pret);
        x.append(produs);
    }
}

function aplica_filtre(){
    var x = document.getElementById("lista_produse");
    x.remove();
    x = document.createElement('div');
    x.style.display = "flex";
    x.style.flexDirection = "row";
    x.style.flexWrap = "wrap";
    x.style.justifyContent = "space-around";
    x.style.marginTop = "90px";
    x.style.marginLeft = "60px";
    x.style.justifyContent = "center";
    x.style.marginBottom = "50px";
    var y = document.getElementById("lista_lista_produse");
    x.id = "lista_produse";
    y.append(x);
    var minim = document.getElementById("minim").value;
    var maxim = document.getElementById("maxim").value;
    for( i = 0; i < 10; i++ ){
        if( minim <= lista_produse[i].pret && maxim >= lista_produse[i].pret ){
            let produs = document.createElement('div');
            let denumire = document.createElement('p');
            let pret = document.createElement('p');
            let poza = document.createElement('img');
            let a = document.createElement('a');
            a.href = lista_produse[i].referinta;
            poza.src = lista_produse[i].poza;
            poza.style.maxWidth = "220px";
            poza.style.marginLeft = "5px";
            poza.style.marginRight = "5px";
            poza.style.maxHeight = "350px";
            poza.style.marginTop = "2%";
            poza.style.justifyContent = "center";
            denumire.innerHTML = lista_produse[i].denumire;
            denumire.style.textAlign = "center";
            pret.innerHTML = "Pret " + lista_produse[i].pret + "  lei";
            pret.style.textAlign = "center";
            produs.style.backgroundColor = "rgb(148, 148, 148)";
            produs.style.marginLeft = "20px";
            produs.style.marginBottom = "20px";
            produs.style.width = "230px";
            produs.append(denumire);
            a.append(poza);
            produs.append(a);
            produs.append(pret);
            produs.className = "produse";
            x.append(produs);
        }
    }
}
var stare_meniu = false;
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

