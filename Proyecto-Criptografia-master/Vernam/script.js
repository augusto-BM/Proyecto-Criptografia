function cifrar() {
    const texto = document.getElementById('texto').value.toUpperCase();
    const clave = document.getElementById('clave').value.toUpperCase();
    const alfabetoSize = parseInt(document.getElementById('alfabeto').value, 10);
    let resultado = '';

    if (texto.length !== clave.length) {
        alert('La longitud del texto y la clave deben ser iguales.');
        return;
    }

    for (let i = 0; i < texto.length; i++) {
        if (/[A-Z]/.test(texto[i])) {
            const textoCharCode = texto.charCodeAt(i) - 65;
            const claveCharCode = clave.charCodeAt(i) - 65;
            const nuevoCharCode = (textoCharCode + claveCharCode) % alfabetoSize + 65;
            resultado += String.fromCharCode(nuevoCharCode);
        } else {
            resultado += texto[i];
        }
    }

    document.getElementById('resultado').value = resultado;
}
