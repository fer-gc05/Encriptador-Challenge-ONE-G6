let textoInicial = '';
let textoCifrado = '';
let textoResultante = '';

function encriptarTexto() {

    textoInicial = document.getElementById('texto-inicial').value.trim();

    if (textoInicial.trim() != "") {

        document.getElementById('img').style.display = 'none';
        document.getElementById('T-r').style.display = 'none';
        document.getElementById('T-p').style.display = 'none';
        document.getElementById('texto-resultado').style.display = 'block';
        document.getElementById('btn-copiar').style.display = 'block';
        document.getElementById('btn-limpiar').style.display = 'block';

        textoCifrado = textoInicial.replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        document.getElementById('texto-resultado').textContent = textoCifrado;
        document.getElementById('texto-inicial').value;
    }
    
    return;
}

function desencriptarTexto() {

    textoInicial = document.getElementById('texto-inicial').value.trim();

    if (textoInicial.trim()!=""){

        document.getElementById('img').style.display = 'none';
        document.getElementById('T-r').style.display = 'none';
        document.getElementById('T-p').style.display = 'none';
        document.getElementById('texto-resultado').style.display = 'block';
        document.getElementById('btn-copiar').style.display = 'block';
        document.getElementById('btn-limpiar').style.display = 'block';

        textoInicial = document.getElementById('texto-inicial').value.trim();

        textoResultante = textoInicial.replace(/enter/gi, "e")
                                  .replace(/imes/gi, "i")
                                  .replace(/ai/gi, "a")
                                  .replace(/ober/gi, "o")
                                  .replace(/ufat/gi, "u");

    document.getElementById('texto-resultado').textContent = textoResultante;
    document.getElementById('texto-inicial').value;
    }

   return;
}

function copiarTexto() {
    textoResultante = document.getElementById('texto-resultado');
    navigator.clipboard.writeText(textoResultante.textContent);

    return; 
}

function limpiar() {

    document.getElementById('texto-resultado').textContent = '';
    document.getElementById('texto-resultado').style.display = 'none';

    document.getElementById('img').style.display = 'block';
    document.getElementById('T-r').style.display = 'block';
    document.getElementById('T-p').style.display = 'block';
    document.getElementById('btn-copiar').style.display = 'none';
    document.getElementById('btn-limpiar').style.display = 'none';  
}






