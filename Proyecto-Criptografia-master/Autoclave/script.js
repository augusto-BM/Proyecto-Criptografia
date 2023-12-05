function cifrar() {
    const texto = document.getElementById('texto').value.toUpperCase();
    const clave = document.getElementById('clave').value.toUpperCase();
    const alfabetoSize = parseInt(document.getElementById('alfabeto').value, 10);
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        if (/[A-Z]/.test(texto[i])) {
            const textoCharCode = texto.charCodeAt(i) - 65;
            const claveCharCode = clave.charCodeAt(i % clave.length) - 65;
            const nuevoCharCode = (textoCharCode + claveCharCode) % alfabetoSize + 65;
            resultado += String.fromCharCode(nuevoCharCode);
        } else {
            resultado += texto[i];
        }
    }

    document.getElementById('resultado').value = resultado;
}

function descifrar() {
    const texto = document.getElementById('texto').value.toUpperCase();
    const clave = document.getElementById('clave').value.toUpperCase();
    const alfabetoSize = parseInt(document.getElementById('alfabeto').value, 10);
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        if (/[A-Z]/.test(texto[i])) {
            const textoCharCode = texto.charCodeAt(i) - 65;
            const claveCharCode = clave.charCodeAt(i % clave.length) - 65;
            const nuevoCharCode = (textoCharCode - claveCharCode + alfabetoSize) % alfabetoSize + 65;
            resultado += String.fromCharCode(nuevoCharCode);
        } else {
            resultado += texto[i];
        }
    }

    document.getElementById('resultado').value = resultado;
}
