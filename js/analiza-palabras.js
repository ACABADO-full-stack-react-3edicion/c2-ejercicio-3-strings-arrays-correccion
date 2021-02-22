const deletrea = texto => texto.split("").join("-");
const esPar = texto => texto.length % 2 === 0;
const empiezaMayuscula = texto => texto[0] === texto[0].toUpperCase();
const contieneSubtexto = (texto, subcadena) => texto.toLowerCase().includes(subcadena);

function analizaPalabras(palabras) {
    let analisis = [];
    for (let i in palabras) {
        const palabra = palabras[i];
        analisis.push("#######");
        analisis.push(`Palabra ${+i + 1}: ${palabra}`);
        analisis.push(`Nº de caracteres: ${palabra.length}`);
        analisis.push(`Deletreo: ${deletrea(palabra)}`);
        analisis.push(`La palabra es ${esPar(palabra) ? "par" : "impar"} y ${empiezaMayuscula(palabra) ? "" : "no "}empieza por mayúscula.`);
        analisis.push(`La palabra ${contieneSubtexto(palabra, "ble") ? "sí" : "no"} contiene "ble".`);
    }
    return analisis.join("\n");
}