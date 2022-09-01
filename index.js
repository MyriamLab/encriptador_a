const textarea = document.getElementById("js_textarea");

function encriptar (){
  let string = textarea.value;  // guardo el valor del textarea
  string = string.toLowerCase(); // o convierto a minúscula
  console.log(string);
  console.log(string.replaceAll("a", "ai")); // replace() sólo reemplaza la 1era. coincidencia
  return string;
  
}
     
//BOTÓN ENCRIPTAR
const buttonEncrypt = document.getElementById("js_buttonEncrypt");
buttonEncrypt.addEventListener("click", encriptar );