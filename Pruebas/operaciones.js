function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    if(a == 0 || b == 0){
        return "No se puede multiplicar"
    }
    return a * b;
}

function dividir(a, b){
    if(a == 0 || b == 0){
        return "No se puede dividir por cero"
    }
    return a / b;
}