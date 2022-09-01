const textarea = document.getElementById("js_textarea");
const mostrarTxtEncriptado = document.getElementById("js_vista2-TxtEncriptado");

function encriptar(){
    let mensajeAencriptar = textarea.value;
    mensajeAencriptar = mensajeAencriptar.toLowerCase();

    // guardo en una variable el nuevo mnensaje encriptado según los tipos de llaves
    let mensajeEncriptado = mensajeAencriptar
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    console.log(mensajeEncriptado);

    // PASO EL MENSAJE ENCRIPTADO AL VALOR DEL SPAN QUE SE MUESTA EN LA SECCIÓN 2 
    mostrarTxtEncriptado.value = mensajeEncriptado;
    console.log( mostrarTxtEncriptado.value)    
}


function desEncriptar(){
    let mensajeEncriptado =  mostrarTxtEncriptado.value;
    let mensajeDesEncriptado = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    mensajeEncriptado = mensajeDesEncriptado;
    console.log(mensajeEncriptado);

}

//BOTÓN ENCRIPTAR
const botonEncriptar = document.getElementById("js_buttonEncrypt");
botonEncriptar.addEventListener("click", encriptar);
botonEncriptar.addEventListener("click", cambiarPantalla)


//BOTÓN DESENCRIPTAR
const botonDesEncriptar = document.getElementById("js_buttonDecrypt");
botonDesEncriptar.addEventListener("click", desEncriptar);


//CAMBIAR PANTALLA
function cambiarPantalla(){
    let cambio = document.querySelector(".vista1-texto-noEncontrado").style.display = "none"
    let visible = document.querySelector(".vista2-texto-encriptado").style.display = "block"
   
}


