// Selectores y variables
const textoUsuario = document.querySelector('#textoEncriptar');
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');
const textoDesencriptado = document.querySelector('#textoDesencriptado');
const img = textoDesencriptado.children[0];
const contenedorMsg = textoDesencriptado.children[1];
const btnCopy = textoDesencriptado.children[2];
const parrafo = contenedorMsg.children[2];


let textoResultado;

// eventlisteners
document.addEventListener('DOMContentLoaded',()=>{

    textoUsuario.addEventListener('keyup',validar);

    btnEncriptar.addEventListener('click',()=>{
       Encriptar(textoUsuario.value);
    });

    btnDesencriptar.addEventListener('click',()=>{
        Desencriptar(textoUsuario.value);
    });

    btnCopy.addEventListener('click',copiarTexto);
})



// Funciones

function validar() {

    // Valida si existe texto en el textarea
    if(textoUsuario.value === ''){
        mostrarContenedorMsg();
    }
}


function Encriptar(texto) {
   
    if(textoUsuario.value === ''){
        alert('error');
    }
    
    else{
        limpiarMensaje();
        // Encriptamos el texto que ingreso el usuario
        textoResultado = texto.replace('e','enter').replace('i','imes').replace('a','ai').replace('o','ober').replace('u','ufat')

        // ocultar mensaje de ningun texto
        ocultarContenedorMsg();

        //Mostrar text Encriptado
        parrafo.textContent = textoResultado;
    }
}

function Desencriptar(texto) {
   
    if(textoUsuario.value === ''){
        alert('error');
    }
   
    else{
        limpiarMensaje();

        textoResultado = texto.replace('enter','e').replace('imes','i').replace('ai','a').replace('ober','o').replace('ufat','u')

        // ocultar mensaje de ningun texto
        ocultarContenedorMsg();
    
        //Mostrar text Encriptado
        parrafo.textContent = textoResultado;
    }
  
}

function ocultarContenedorMsg() {
    img.classList.add('ocultar');
    contenedorMsg.classList.remove('contenedorMsg');
    contenedorMsg.classList.add('msgDesencriptado');
    contenedorMsg.children[0].classList.add('ocultar');
    contenedorMsg.children[1].classList.add('ocultar');
    parrafo.classList.remove('ocultar');
    btnCopy.classList.remove('ocultar');
}

function mostrarContenedorMsg() {
    img.classList.remove('ocultar');
    contenedorMsg.classList.add('contenedorMsg');
    contenedorMsg.classList.remove('msgDesencriptado');
    contenedorMsg.children[0].classList.remove('ocultar');
    contenedorMsg.children[1].classList.remove('ocultar');
    parrafo.classList.add('ocultar');
    btnCopy.classList.add('ocultar');
}

function copiarTexto() {

    seleccionaTexto();
    document.execCommand("copy")
}

function limpiarMensaje() {
    parrafo.textContent = '';
}

function seleccionaTexto(){
    let doc = document,
    text = parrafo,range,selection;
    
    if(doc.body.createTextRange){ //ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    }else if(window.getSelection){ //all others
        selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
