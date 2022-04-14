const math={};
function suma(x1, x2){
    return x1 + x2;
}
function resta(x1, x2){
    return x1 - x2;
}
function multiplicacion(x1, x2){
    return x1 * x2;
}
function divicion(x1, x2){
    if(x2 == 0){
        console.log("no puedes dividir entre 0");
    }else{
        return x1 / x2;
    }
}

math.suma=suma;
math.resta=resta;
math.multiplicacion=multiplicacion;
math.divicion=divicion;

module.exports = math;