const ingresoTexto = document.querySelector("#entradatexto");
const salidaTexto = document.querySelector("#salidaTexto");

const btnEncriptar = document.querySelector("#botonEncriptar");
const btnDesencriptar = document.querySelector("#botonDesencriptar");
const btnCopiar = document.querySelector("#botonCopiar");

function encriptar (){
    let texto = entradaTexto.value.toLowerCase();
    let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    // if (texto = "á" || "é" || "í" || "ó" || "ú"){
    //   alert("Recuerda que no se pueden usar acentos")
    // }
    // else{
    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("botonCopiar").style.visibility = "visible";
  
    salidaTexto.value = textoEncriptado;
  
    document.getElementById("texto").value = '';
    // }
  
  }

function desencriptar (){
    let textoEncriptado = entradaTexto.value.toLowerCase();
    let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
  
    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("botonCopiar").style.visibility = "visible";
  
    salidaTexto.value = texto;
  
    document.getElementById("texto").value = '';
  
}
  
function copiar () {
let textoEncriptado = salidaTexto.value;
navigator.clipboard.writeText(textoEncriptado);
}


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
