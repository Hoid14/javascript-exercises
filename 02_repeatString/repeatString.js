const repeatString = function(cadena,numero) {
    let aux=""
    if(numero<0){
        aux="ERROR"
    }
    else{
        for(let i=0;i<numero;i++){
            aux+=cadena
        }
    }
    return aux
};

// Do not edit below this line
module.exports = repeatString;
