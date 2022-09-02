const textarea = document.getElementById("js_textarea");
const mostrarTxtEncriptado = document.getElementById("js_vista2-TxtEncriptado");


function validar(mensaje){
    let spanMensaje = document.getElementById("spanMensaje");
    let filtroUno = mensaje
    console.log(mensaje)
    
    let letras = "abcdefghijklmopqrstuvwzy";
    if(!filtroUno.includes(letras)){ //si el mensaje no incluye letras 
        //console.log("Ingresa sólo caracteres simples")
        spanMensaje.innerHTML ="Ingresa sólo caracteres simples";
        spanMensaje = "";
    }else {
        console.log("error")
        //encriptar()
    }
}


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
  
   // console.log( mostrarTxtEncriptado.value)    
  validar (textarea.value)
   //aquí llamo a la función validar con un parámetro que recibe como argumento el valor de mensajeAencriptar
}


function desEncriptar(){
    let mensajeEncriptado =  mostrarTxtEncriptado.value;
    let mensajeDesEncriptado = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    mostrarTxtEncriptado.value = mensajeDesEncriptado;
    console.log(mensajeEncriptado);
}

function copiar(){
  
   let  mensajeEncriptado = mostrarTxtEncriptado;
    console.log( mensajeEncriptado)
    navigator.clipboard.writeText(mensajeEncriptado.value);
    textarea.value=""; //limpia el área del mensaje a encriptar 
    textarea.focus();
}



//BOTÓN ENCRIPTAR
const botonEncriptar = document.getElementById("js_buttonEncrypt");
botonEncriptar.addEventListener("click", encriptar);
botonEncriptar.addEventListener("click", cambiarPantalla)


//BOTÓN DESENCRIPTAR
const botonDesEncriptar = document.getElementById("js_buttonDecrypt");
botonDesEncriptar.addEventListener("click", desEncriptar);

//BOTÓN COPIAR
const botonCopiar = document.getElementById("js_buttonCopyText");
botonCopiar.addEventListener("click", copiar)

//CAMBIAR PANTALLA
function cambiarPantalla(){
    let cambio = document.querySelector(".vista1-texto-noEncontrado").style.display = "none"
    let visible = document.querySelector(".vista2-texto-encriptado").style.display = "block"
   
}


