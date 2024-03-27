let textoInicial = '';
let textoCifrado = '';
let textoResultante = '';

// Función para encriptar el texto
function encriptarTexto() {
    // Obtener el texto inicial del elemento de entrada y eliminar espacios en blanco y caracteres no alfabéticos
    textoInicial = document.getElementById('texto-inicial').value.trim().toLowerCase().replace(/[^a-z]/g, '');

    if (textoInicial.trim() != '') {
        // Ocultar elementos innecesarios y mostrar elementos relevantes
        document.getElementById('img').style.display = 'none';
        document.getElementById('T-r').style.display = 'none';
        document.getElementById('T-p').style.display = 'none';
        document.getElementById('texto-resultado').style.display = 'block';
        document.getElementById('btn-copiar').style.display = 'block';
        document.getElementById('btn-limpiar').style.display = 'block';

        // Encriptar el texto reemplazando cada letra con su correspondiente
        textoCifrado = textoInicial.replace(/e/gi, 'enter')
            .replace(/i/gi, 'imes')
            .replace(/a/gi, 'ai')
            .replace(/o/gi, 'ober')
            .replace(/u/gi, 'ufat');

        // Mostrar el texto cifrado en el elemento de resultado
        document.getElementById('texto-resultado').textContent = textoCifrado;
        document.getElementById('texto-inicial').value = '';

        // Mostrar una notificación de éxito
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: 'success',
            title: 'Texto encriptado',
        });
    } else {
        // Mostrar una notificación de advertencia si no se ingresa ningún texto
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: 'warning',
            title: 'Primero ingresa un texto para encriptar',
        });
    }

    return;
}

// Función para desencriptar el texto
function desencriptarTexto() {
    // Obtener el texto inicial del elemento de entrada y eliminar espacios en blanco y caracteres no alfabéticos
    textoInicial = document.getElementById('texto-inicial').value.trim().toLowerCase().replace(/[^a-z]/g, '');

    if (textoInicial.trim() != '') {
        // Ocultar elementos innecesarios y mostrar elementos relevantes
        document.getElementById('img').style.display = 'none';
        document.getElementById('T-r').style.display = 'none';
        document.getElementById('T-p').style.display = 'none';
        document.getElementById('texto-resultado').style.display = 'block';
        document.getElementById('btn-copiar').style.display = 'block';
        document.getElementById('btn-limpiar').style.display = 'block';

        // Desencriptar el texto reemplazando cada palabra cifrada con su correspondiente letra
        textoResultante = textoInicial.replace(/enter/gi, 'e')
            .replace(/imes/gi, 'i')
            .replace(/ai/gi, 'a')
            .replace(/ober/gi, 'o')
            .replace(/ufat/gi, 'u');

        // Mostrar el texto desencriptado en el elemento de resultado
        document.getElementById('texto-resultado').textContent = textoResultante;
        document.getElementById('texto-inicial').value = '';

        // Mostrar una notificación de éxito
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: 'success',
            title: 'Texto desencriptado',
        });
    } else {
        // Mostrar una notificación de advertencia si no se ingresa ningún texto
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: 'warning',
            title: 'Primero ingresa un texto para desencriptar',
        });
    }

    return;
}

// Función para copiar el texto desencriptado al portapapeles
function copiarTexto() {
    // Obtener el texto resultante del elemento de resultado
    textoResultante = document.getElementById('texto-resultado');
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textoResultante.textContent);

    // Mostrar una notificación de información
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: 'info',
        title: 'Texto copiado en el portapapeles',
    });

    return;
}

// Función para limpiar los elementos y restablecer el estado inicial
function limpiar() {
    // Limpiar el texto resultante y ocultar el elemento de resultado
    document.getElementById('texto-resultado').textContent = '';
    document.getElementById('texto-resultado').style.display = 'none';

    // Mostrar elementos ocultos y ocultar elementos relevantes
    document.getElementById('img').style.display = 'block';
    document.getElementById('T-r').style.display = 'block';
    document.getElementById('T-p').style.display = 'block';
    document.getElementById('btn-copiar').style.display = 'none';
    document.getElementById('btn-limpiar').style.display = 'none';
}
