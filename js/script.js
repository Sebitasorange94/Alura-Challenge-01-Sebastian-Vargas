const textoIngresado = document.querySelector("#entradaTexto");
const textoSalida = document.querySelector("#salidaTexto");
const encriptar = document.querySelector("#botonEncriptar")
const desencriptar = document.querySelector("#botonDesencriptar")
const copiar = document.querySelector("#botonCopiar")
const pegar = document.querySelector("#botonPegar")

function encriptacion(){
    let texto = entradaTexto.value.toLowerCase();
    let paraEncriptar = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    // console.log(paraEncriptar);
 
        
      
    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("botonCopiar").style.visibility = "visible";
    textoSalida.value = paraEncriptar;

}

function desencriptacion(){
    let desencriptado = entradaTexto.value.toLowerCase();
    let texto = desencriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
     
    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("botonCopiar").style.visibility = "visible";
    textoSalida.value = texto;
}

function copiando(){
    let textoProcesado = textoSalida.value;
    navigator.clipboard.writeText(textoProcesado);
}

function pegando(){
    let pegado = navigator.clipboard.readText();
    pegado.then(function(texto){
        document.getElementById("entradaTexto").value=texto;
    });

}

encriptar.onclick= encriptacion;
desencriptar.onclick= desencriptacion;
copiar.onclick=copiando;
pegar.onclick=pegando;
