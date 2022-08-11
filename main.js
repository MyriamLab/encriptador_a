var string = "hola a todos"
console.log(string.charAt(2)) //l


//ingreso hola en el textarea
const h1 = document.querySelector("h1");
console.log(typeof(h1)) //objet

const textarea = document.getElementById("js_textarea");
//console.log(textarea.value);
console.log(typeof(textarea.value)) //string

let mensaje = textarea.value;
console.log(mensaje)
mensaje.charAt(2);

const buttonEncrypt = document.getElementById("js_buttonEncrypt");

buttonEncrypt.addEventListener("click", function (){
    let mensaje = textarea.value;
    console.log(mensaje);

   console.log(mensaje.charAt(0)) ;
   console.log(mensaje.charAt(1)) ;
   var cualquierCadena="Brave new world";
   cualquierCadena.charAt(0);
})








// Desarrollar la lógica de la encriptación

// Mostrar en la pantalla el resultado del texto encriptado

// Capturar el texto escrito en el campo del input del HTML

// Crear función 

/*
function encriptar(text){
    console.log(text);
    //if (typeof textarea === "string"){
        if(text.length){

            let resultado = []; 
            
            for (let i=0; i < text.length; i++){
                let codigo = text.charCodeAt(i);
                console.log(codigo);  
            }

        }else {
            alert("Ingrese un texto")
        }

  //  }else {
 //     alert("Ingrese una cadena de caracteres")
 //   }

};

// Conectar función a su respectivo botón en el HTML
*/