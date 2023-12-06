function cifrar() {
    const mensaje = document.getElementById('mensaje').value.toUpperCase();
    const clave = document.getElementById('clave').value.toUpperCase();
    const modulo = parseInt(document.getElementById('modulo').value);

    const moduloAlphabet = generarAlfabeto(modulo);

    let result = '';

    for (let i = 0; i < mensaje.length; i++) {
        const mensajeChar = mensaje.charAt(i);
        const claveChar = clave.charAt(i % clave.length);

        const mensajeNum = letraAValor(mensajeChar, moduloAlphabet);
        const claveNum = letraAValor(claveChar, moduloAlphabet);

        const resultadoNum = (mensajeNum + claveNum) % modulo;
        result += `<span class="char">${valorALetra(resultadoNum, moduloAlphabet)}</span>`;
    }

    document.getElementById('resultado').innerHTML = result;
}

function descifrar() {
    const mensaje = document.getElementById('mensaje').value.toUpperCase();
    const clave = document.getElementById('clave').value.toUpperCase();
    const modulo = parseInt(document.getElementById('modulo').value);

    const moduloAlphabet = generarAlfabeto(modulo);

    let result = '';

    for (let i = 0; i < mensaje.length; i++) {
        const mensajeChar = mensaje.charAt(i);
        const claveChar = clave.charAt(i % clave.length);

        const mensajeNum = letraAValor(mensajeChar, moduloAlphabet);
        const claveNum = letraAValor(claveChar, moduloAlphabet);

        let resultadoNum;
        if (mensajeNum >= claveNum) {
            resultadoNum = (mensajeNum - claveNum + modulo) % modulo;
        } else {
            resultadoNum = (mensajeNum - claveNum) % modulo;
        }

        result += `<span class="char">${valorALetra(resultadoNum, moduloAlphabet)}</span>`;
    }

    document.getElementById('resultado').innerHTML = result;
}

function letraAValor(letra, alfabeto) {
    return alfabeto.indexOf(letra);
}

function valorALetra(valor, alfabeto) {
    return alfabeto[valor];
}

function generarAlfabeto(modulo) {
    if (modulo === 26) {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    } else if (modulo === 27) {
        return 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z'.split(' ');
    } else {
        throw new Error('Modulo no soportado');
    }
}
