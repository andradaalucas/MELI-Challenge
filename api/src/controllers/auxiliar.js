 function separador(valor) {
    let nums = new Array();
    let simb = "."; //Éste es el separador
    valor = valor.toString();
    valor = valor.replace(/\D/g, "");   //Ésta expresión regular solo permitira ingresar números
    nums = valor.split(""); //Se vacia el valor en un arreglo
    let long = nums.length - 1; // Se saca la longitud del arreglo
    let patron = 3; //Indica cada cuanto se ponen las comas
    let prox = 2; // Indica en que lugar se debe insertar la siguiente coma
    let res = "";

    while (long > prox) {
        nums.splice((long - prox),0,simb); //Se agrega la coma
        prox += patron; //Se incrementa la posición próxima para colocar la coma
    }

    for (var i = 0; i <= nums.length-1; i++) {
        res += nums[i]; //Se crea la nueva cadena para devolver el valor formateado
    }

    return res;
}

module.exports = {
    separador
}