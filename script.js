var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedorresult"); // Cambiado a .contenedorresult
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajatex = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatex);
}

function desencriptar() {
    ocultarAdelante();
    var cajatex = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatex);
}

function recuperarTexto() {
    var cajatex = document.querySelector(".cajatex");
    return cajatex.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "ai";
        } else if (texto[i] === "e") {
            textoFinal += "enter";
        } else if (texto[i] === "i") {
            textoFinal += "imes";
        } else if (texto[i] === "o") {
            textoFinal += "ober";
        } else if (texto[i] === "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "a";
            i += 1;
        } else if (texto[i] === "e") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] === "i") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] === "o") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] === "u") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado: " + contenido); // Agregado para verificar el contenido copiado
});
