const process = require("process");
const calculadora = require("./operaciones");

const operaciones = ["sumar", "restar", "multiplicar", "dividir"];

const operation=process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];
let resultado=0;
///eval()

if(operaciones.includes(operation)){
    if(operation==="sumar"){
        resultado = calculadora.sumar(numeroA,numeroB);
        
    }else if(operation==="restar"){
        resultado = calculadora.restar(numeroA,numeroB);
    }
    else if(operation==="multiplicar"){
        resultado = calculadora.multiplicar(numeroA,numeroB);
    }
    else if(operation==="dividir"){
        resultado = calculadora.dividir(numeroA,numeroB);
    }
    console.log(resultado);
    

}else{
    console.log("operacion invalida")
}




