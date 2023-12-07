function cifrar() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;

    // Convertir el mensaje y la clave a sus valores ASCII
    const mensajeAscii = convertirATextoAscii(mensaje);
    const claveAscii = convertirATextoAscii(clave);

    // Realizar la operación XOR a nivel de bits
    const resultadoXor = xorBits(mensajeAscii, claveAscii);

    // Convertir el resultado a texto claro utilizando la tabla
    const resultadoTexto = convertirAsciiATexto(resultadoXor);

    // Mostrar el resultado
    mostrarResultado(resultadoTexto);
}

function descifrar() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;

    // Convertir la clave a sus valores ASCII
    const claveAscii = convertirATextoAscii(clave);

    // Realizar la operación XOR a nivel de bits inversa
    const resultadoXor = xorBitsInverso(mensaje, claveAscii);

    // Convertir el resultado a texto claro utilizando la tabla
    const resultadoTexto = convertirAsciiATexto(resultadoXor);

    // Mostrar el resultado
    mostrarResultado(resultadoTexto);
}

function convertirATextoAscii(texto) {
    return texto.split('').map(char => char.charCodeAt(0));
}

function xorBits(arr1, arr2) {
    return arr1.map((value, index) => value ^ arr2[index]);
}

function xorBitsInverso(texto, arr) {
    const textoAscii = convertirATextoAscii(texto);
    return xorBits(textoAscii, arr);
}

function convertirAsciiATexto(arr) {
    const caracteresEspeciales = [
        'NULL', 'SOH', 'STX', 'ETX', 'EOT', 'ENQ', 'ACK', 'BEL', 'BS', 'HT', 'LF', 'VT', 'FF', 'CR', 'SO', 'SI',
        'DLE', 'DC1', 'DC2', 'DC3', 'DC4', 'NAK', 'SYN', 'ETB', 'CAN', 'EM', 'SUB', 'ESC', 'FS', 'GS', 'RS', 'US',
        'espacio', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?',
        '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_',
        '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', 'DEL',
        'Ç', 'ü', 'é', 'â', 'ä', 'à', 'å', 'ç', 'ê', 'ë', 'è', 'ï', 'î', 'ì', 'Ä', 'Å',
        'É', 'æ', 'Æ', 'ô', 'ö', 'ò', 'û', 'ù', 'ÿ', 'Ö', 'Ü', 'ø', '£', 'Ø', '×', 'ƒ',
        'á', 'í', 'ó', 'ú', 'ñ', 'Ñ', 'ª', 'º', '¿', '®', '¬', '½', '¼', '¡', '«', '»',
        '░', '▒', '▓', '│', '┤', 'Á', 'Â', 'À', '©', '╣', '║', '╗', '╝', '¢', '¥', '┐',
        '└', '┴', '┬', '├', '─', '┼', 'ã', 'Ã', '╚', '╔', '╩', '╦', '╠', '═', '╬', '¤',
        'ð', 'Ð', 'Ê', 'Ë', 'È', 'ı', 'Í', 'Î', 'Ï', '┘', '┌', '█', '▄', '¦', 'Ì', '▀',
        'Ó', 'ß', 'Ô', 'Ò', 'õ', 'Õ', 'µ', 'þ', 'Þ', 'Ú', 'Û', 'Ù', 'ý', 'Ý', '¯', '´',
        '≡', '±', '‗', '¾', '¶', '§', '÷', '¸', '°', '¨', '·', '¹', '³', '²', '■', 'nbsp'
    ];

    return arr.map(value => caracteresEspeciales[value] || String.fromCharCode(value)).join('');
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
