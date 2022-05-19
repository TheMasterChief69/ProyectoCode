let cajaCodigo;
function iniciar() {
  cajaCodigo = document.getElementById("codigo");
  let archivos = document.getElementById("archivos");
  archivos.addEventListener("change", procesar);
}
function procesar(evento) {
  let archivos = evento.target.files;
  let archivo = archivos[0];
  let lector = new FileReader();
  lector.addEventListener("load", mostrar);
  lector.readAsText(archivo);
}
function mostrar(evento) {
  let resultado = evento.target.result;
  cajaCodigo.innerHTML = resultado;
}
window.addEventListener("load", iniciar);

let textToCopy = "";
document.addEventListener("mouseup", () => {
  textToCopy = window.getSelection().toString();
  console.log(textToCopy);
});

function copiarPortapapeles(ev) {
  try {
    var res = document.execCommand("copy");
    if (res) console.log("exito al copiar");
    else console.log("fracaso al copiar");
  } catch (ex) {
    console.log("exepcion");
  }
  //window.getSelection().removeRange(seleccion);
}

function cortarPortapapeles(ev) {
  try {
    var res = document.execCommand("cut");
    if (res) console.log("exito al cortar");
    else console.log("fracaso al cortar");
  } catch (ex) {
    console.log("exepcion");
  }
}

function pegarPortapapeles(ev) {
  try {
    var res = document.execCommand("paste");
    if (res) console.log("exito al pegar");
    else console.log("fracaso al pegar");
  } catch (ex) {
    console.log("exepcion");
  }
}

function identar(){
  let codigo = document.getElementById('codigo').value
  console.log(codigo)
  let cadenas = codigo.split(' ')
  console.log(cadenas)
  for(let i=0;i<cadenas.legth;i++){
    if(cadenas[i]=='int'){
      console.log('es un int')
    }
    console.log(cadenas[i])
  }

}
















/*function cortarPortapapeles() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log("exito al copiar");
    });
  } else {
    console.log("Browser Not compatible");
  }
}

function pegarPortapapeles() {
  if (navigator.clipboard) {
    navigator.clipboard.readText().then(
      clipText => textToCopy.innerText = clipText);
      console.log('exito al pegar')
  } else {
    console.log("Browser Not compatible");
  }
}


function copiarPortapapeles() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log("exito al copiar");
    });
  } else {
    console.log("Browser Not compatible");
  }
}
*/
